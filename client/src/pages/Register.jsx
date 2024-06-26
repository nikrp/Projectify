import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '',
    });

    const onChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value});
    }

    const googleSignIn = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
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
                auth.signOut();
            });
        });
    }

    const signIn = async () => {
        const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const q = query(collection(db, 'users'), where("uid", "==", result.user.uid));
        const querySnapshot = await getDocs(q);
        const { password, ...userDataWithoutPassword } = userData;
        if (querySnapshot.docs.length === 0) {
            console.log(querySnapshot.docs);
            try {
                await setDoc(doc(db, "users", result.user.uid), {
                    ...userDataWithoutPassword,
                    uid: result.user.uid
                });
                console.log("set");
            } catch (error) {
                console.error("Error setting document:", error);
            }
        } else {
            console.log("Document already exists");
        }
        navigate('/dashboard', { replace: true });
        await auth.signOut();   
    }

    return (
        <div className={`h-screen flex justify-center items-center w-full`} data-theme="dark">
            <button className={`btn btn-neutral fixed top-5 left-5`} onClick={() => navigate('/', { replace: true })}>←  Back</button>
            <div className="card bg-neutral text-neutral-content xl:w-2/6 lg:w-2/5 shadow-md">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">Start Today!</h2>
                    <div className={`px-3 py-4 w-full`}>
                        <div className={`flex justify-between`}>
                            <label className="form-control w-[49%]">
                                <div className="label">
                                    <span className="label-text text-lg">First Name</span>
                                </div>
                                <input type="text" name="fName" value={userData.fName} onChange={onChange} placeholder="Enter your first name" className="input input-bordered input-lg w-full" />
                            </label>
                            <label className="form-control w-[49%]">
                                <div className="label">
                                    <span className="label-text text-lg">Last Name</span>
                                </div>
                                <input type="text" name="lName" value={userData.lName} onChange={onChange} placeholder="Enter your last name" className="input input-bordered input-lg w-full" />
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Email</span>
                            </div>
                            <input type="email" name="email" value={userData.email} onChange={onChange} placeholder="Enter your email" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Username</span>
                            </div>
                            <input type="text" name="username" value={userData.username} onChange={onChange} placeholder="Enter a username" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Password</span>
                            </div>
                            <input type="password" name="password" value={userData.password} onChange={onChange} placeholder="Enter your password" className="input input-bordered input-lg w-full" />
                        </label>
                        <button onClick={signIn} className={`mt-4 btn btn-primary text-xl w-full`}>Register</button>
                        <div className="divider">OR</div>
                        <button className={`px-2 py-2 mb-2 rounded-lg bg-blue-500 text-black text-xl text-left w-full flex items-center`} onClick={googleSignIn}>
                            <div className={`rounded-lg bg-white w-fit p-2`}>
                                <FcGoogle className={`h-6 w-6`} />
                            </div>
                            <span className={`ml-auto mr-auto font-semibold text-white`}>
                                Login with Google
                            </span>
                        </button>
                        <p className={`w-full text-left flex items-center justify-between`}><span className={`mr-auto`}>Already have an account? <span onClick={() => navigate('/login', { replace: true })} className={`text-accent cursor-pointer`}>Login</span></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}