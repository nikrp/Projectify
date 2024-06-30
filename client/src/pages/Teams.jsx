import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

export default function Teams() {
    return (
        <div className={`flex-1 p-10 bg-base-300`}>
            <p className={`text-4xl font-bold text-center mb-5`}>Teams</p>
            <div className={`grid grid-cols-5 mx-auto gap-2 w-9/12`}>
                <div className={`flex items-center justify-center flex-col rounded-lg bg-black w-56 h-48 gap-2`}>
                    <FaPlus size={25} fill="white"/>
                    <p className={`text-lg text-white font-bold`}>Create new Team</p>
                </div>
                <div className={`flex items-center justify-center flex-col rounded-lg w-56 h-48 hover:bg-base-200 cursor-pointer transition-all duration-100 ease-in-out p-2`}>
                    <div className={`h-40 w-full bg-neutral rounded-xl mb-2`}></div>
                    <div className={`flex-1 w-full`}>
                        <p className={`text-lg font-bold flex items-center justify-between`}>My Team<span className={`text-base bg-base-200 rounded-lg p-1 px-2 flex items-center`}><RiTeamFill className={`mr-1`} />1/10</span></p>
                        <p className={`flex items-center text-white justify-between`}>Spewing Facts<span className={`rounded-md hover:bg-neutral cursor-pointer`}><BsThreeDots size={20} className={`m-2`} /></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}