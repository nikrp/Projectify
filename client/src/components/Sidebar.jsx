import { useEffect, useState } from "react"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithCredential } from "firebase/auth";
import Cookies from 'js-cookie'

export default function Sidebar() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
          if (user) {
            console.log("Still logged in");
            setUserData(user);
          } else {
            console.log("Not logged in")
            const rToken = Cookies.get('nekothserfer');
            if (rToken) {
              signInWithCredential(auth, rToken).then((result) => {
                console.log("Logged in:", auth.currentUser.displayName);
                setUserData(result.user);
              }).catch((e) => {
                console.error("Error Signing In With Credential:", e);
              });
            }
          }
        });

      }, []);

    return (
        <div className={`w-64 px-10 py-5 md:w-1/4 lg:w-1/5 xl:w-1/6 min-h-screen border-r-2 border-gray-600 flex flex-col`} data-theme='dark'>
            <h1 className={`text-3xl mb-10 font-bold`}>Projectify</h1>
            <p className={`font-bold text-gray-400 mb-2`}>General</p>
            <button className={`btn btn-ghost justify-start text-base text-gray-300 w-full mb-1 px-2`}>Dashboard</button>
            <button className={`btn btn-ghost justify-start text-base text-gray-300 w-full mb-1 px-2`}>Projects</button>
            <button className={`btn btn-ghost justify-start text-base text-gray-300 w-full px-2`}>Teams</button>
            <p className={`font-bold text-gray-400 mb-2 mt-2`}>Account</p>
            <div className={`mb-1 p-4 flex items-center bg-base-200 rounded-xl w-fit`}>
                {userData && <img className={`rounded-full w-12 mr-3`} src={userData.photoURL} alt="User" />}
                <div className={``}>
                    <p className={`font-semibold text-gray-300`}>{userData ? userData.displayName : "----"}</p>
                    <p className={`font-medium text-accent`}>Basic Plan</p>
                </div>
            </div>
            <button className={`btn btn-ghost justify-start text-base text-gray-300 w-full mb-1 px-2`}>Settings</button>
            <button className={`btn text-red-400 text-base justify-start btn-ghost px-2`} onClick={() => {auth.signOut(); navigate('/', { replace: true })}}>Logout</button>
        </div>
    )
}