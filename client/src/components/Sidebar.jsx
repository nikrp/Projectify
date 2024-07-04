import { useEffect, useState } from "react"
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithCredential } from "firebase/auth";
import Cookies from 'js-cookie'
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar({ setTheme, theme }) {
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
                <label className="swap swap-rotate btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0">
                  {/* this hidden checkbox controls the state */}
                  <input onClick={() => setTheme((ct) => ct === 'dark' ? 'light' : 'dark')} type="checkbox" value={'dark'} className={`theme-controller`} />

                  {/* sun icon */}
                  <svg
                    className="swap-on h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              <button onClick={() => {auth.signOut(); navigate('/', { replace: true })}} className={`btn bg-neutral w-12 h-5 rounded-full hover:btn-active p-0`}><IoIosLogOut size={25} className={`fill-red-400`} /></button>
            </div>
        </div>
    )
}