import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useState } from "react";
import Cookies from 'js-cookie';

export default function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value});
    }

    const googleSignIn = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
            result.user.getIdToken().then((idToken) => {
                console.log(typeof idToken, idToken);
                // const token = GoogleAuthProvider.credential(idToken);
                Cookies.set('nekothserfer', idToken);
                Cookies.set('nsprovider', 'google');
                const q = query(collection(db, 'users'), where("uid", "==", result.user.uid));
                getDocs(q).then(async (querySnapshot) => {
                    console.log(querySnapshot.docs);
                    if (querySnapshot.docs.length === 0) {
                        await setDoc(doc(db, "users", result.user.uid), {
                            fName: result.user.displayName,
                            lName: "",
                            email: result.user.email,
                            username: result.user.displayName,
                            uid: result.user.uid,
                        });
                    }
                    navigate('/dashboard', { replace: true });
                });
            }).catch((e) => {
                console.error("error fetching id token:", e);
            });
        });
    }

    const signIn = async () => {
        const result = await signInWithEmailAndPassword(auth, userData.email, userData.password);
        const token = EmailAuthProvider.credential(userData.email, userData.password);
        Cookies.set('nekothserfer', `${userData.email} ${userData.password}`);
        Cookies.set('nsprovider', 'email');
        console.log("logged in");
        navigate('/dashboard', { replace: true });
    }

    return (
        <div className={`h-screen flex justify-center items-center w-full`} data-theme="dark">
            <button className={`btn btn-neutral fixed top-5 left-5`} onClick={() => navigate('/', { replace: true })}>←  Back</button>
            <div className="card bg-neutral text-neutral-content w-2/6 shadow-md">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">Welcome Back User!</h2>
                    <div className={`px-3 py-4 w-full`}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Email</span>
                            </div>
                            <input value={userData.email} name="email" onChange={onChange} type="email" placeholder="Enter your email" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Password</span>
                            </div>
                            <input value={userData.password} name="password" onChange={onChange} type="password" placeholder="Enter your password" className="input input-bordered input-lg w-full" />
                        </label>
                        <button onClick={signIn} className={`mt-4 btn btn-primary text-xl w-full`}>Login</button>
                        <div className="divider">OR</div>
                        <button className={`px-2 py-2 mb-2 rounded-lg bg-blue-500 text-black text-xl text-left w-full flex items-center`} onClick={googleSignIn}>
                            <div className={`rounded-lg bg-white w-fit p-2`}>
                                <FcGoogle className={`h-6 w-6`} />
                            </div>
                            <span className={`ml-auto mr-auto font-semibold text-white`}>
                                Register with Google
                            </span>
                        </button>
                        <p className={`w-full text-left flex items-center justify-between`}><span className={`mr-auto`}>Don't have an account? <span onClick={() => navigate('/register', { replace: true })} className={`text-accent cursor-pointer`}>Register</span></span><span className={`text-accent cursor-pointer ml-auto`}>Forgot Password?</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}