import { FaRegPlusSquare } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";

export default function Teams({ theme }) {
    return (
        <div className={`flex-1 p-10 bg-base-300`} data-theme={theme}>
            <p className={`text-4xl font-bold text-center mb-5`}>Teams</p>
            <p className={`text-2xl font-semibold w-9/12 mx-auto mb-3 text-white`}>Start Collaborating</p>
            <div className={`grid grid-cols-2 gap-4 w-9/12 mx-auto mb-8`}>
                <div className={`rounded-xl flex items-center justify-center flex-col gap-2 p-20 w-full bg-base-100 cursor-pointer hover:scale-95 transition-all duration-200 ease-in-out`}>
                    <FaRegPlusSquare size={40} fill="white"/>
                    <p className={`text-2xl font-bold text-white`}>Create a new Team</p>
                </div>
                <div className={`rounded-xl flex items-center justify-center flex-col gap-2 p-20 w-full bg-gradient-to-br cursor-pointer hover:scale-95 transition-all duration-200 ease-in-out from-orange-400 to-[#111111]`}>
                    <IoChatbubbles size={40} fill="white" />
                    <p className={`text-2xl font-bold text-white`}>Join a Team</p>
                </div>
            </div>
            <p className={`text-2xl font-semibold w-9/12 mx-auto mb-3 text-white flex items-center gap-5`}>Teams <span className={`bg-neutral rounded-lg px-3 py-1`}>0</span></p>
        </div>
    )
}