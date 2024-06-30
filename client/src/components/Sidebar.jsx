import { useEffect, useState } from "react"
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithCredential } from "firebase/auth";
import Cookies from 'js-cookie'
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const location = useLocation();

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
          if (user) {
            console.log("Still logged in");
            setUserData(user);
          } else {
            // console.log("Not logged in")
            // const rToken = Cookies.get('nekothserfer');
            // if (rToken) {
            //   signInWithCredential(auth, rToken).then((result) => {
            //     console.log("Logged in:", auth.currentUser.displayName);
            //     setUserData(result.user);
            //   }).catch((e) => {
            //     console.error("Error Signing In With Credential:", e);
            //   });
            // }
          }
        });

        console.log(location.pathname)

      }, []);

    return (
        <div className={`w-64 px-10 py-5 md:w-1/4 lg:w-1/5 xl:w-1/6 min-h-screen bg-base-100 flex flex-col`} data-theme='dark'>
            <h1 className={`text-3xl mb-10 font-bold`}>Projectify</h1>
            <p className={`font-bold text-gray-400 mb-2`}>General</p>
            <button onClick={() => navigate('/dashboard', { replace: true })} className={`btn btn-ghost ${location.pathname.substring(1).split("/")[0].trim() === "dashboard" && "btn-active"} justify-start text-base text-gray-300 w-full mb-1 px-2`}>Dashboard</button>
            <button onClick={() => navigate('/projects', { replace: true })} className={`btn btn-ghost ${location.pathname.substring(1).split("/")[0].trim() === "projects" && "btn-active"} justify-start text-base text-gray-300 w-full mb-1 px-2`}>Projects</button>
            <button onClick={() => navigate('/teams', { replace: true })} className={`btn btn-ghost ${location.pathname.substring(1).split("/")[0].trim() === "teams" && "btn-active"} justify-start text-base text-gray-300 w-full px-2`}>Teams</button>
            <p className={`font-bold text-gray-400 mb-2 mt-2`}>Account</p>
            <div className={`mb-1 p-4 flex items-center bg-base-200 rounded-xl w-fit`}>
                {userData && <img className={`rounded-full w-12 mr-3`} src={userData.photoURL} alt="User" />}
                <div className={``}>
                    <p className={`font-semibold text-gray-300`}>{userData ? userData.displayName : "----"}</p>
                    <p className={`font-medium text-accent`}>Basic Plan</p>
                </div>
            </div>
            <div className={`grid grid-cols-4 gap-1 w-full mb-5 mt-2`}>
              <button className={`btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0`}><IoIosSettings size={25} /></button>
              <button className={`btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0`}><IoIosNotifications size={25} /></button>
              <button className={`btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0`}><MdOutlineSupportAgent size={25} /></button>
              <button onClick={() => {auth.signOut(); navigate('/', { replace: true })}} className={`btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0`}><IoIosLogOut size={25} className={`fill-red-400`} /></button>
            </div>
        </div>
    )
}