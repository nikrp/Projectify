import { FiClock } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const projectContent = [
        {
            projectName: "Fresh Produce",
            creatorName: "Jane Doe",
            projectRole: "Project Manager",
            progression: 20,
            deadline: 50,
            colorCode: "primary"
        },
        {
            projectName: "Tech Innovation",
            creatorName: "John Smith",
            projectRole: "Lead Developer",
            progression: 30,
            deadline: 60,
            colorCode: "secondary"
        },
        {
            projectName: "Marketing Blitz",
            creatorName: "Alice Johnson",
            projectRole: "Marketing Specialist",
            progression: 40,
            deadline: 70,
            colorCode: "accent"
        },
        {
            projectName: "Customer Outreach",
            creatorName: "Bob Brown",
            projectRole: "Community Manager",
            progression: 25,
            deadline: 55,
            colorCode: "info"
        },
        {
            projectName: "Website Redesign",
            creatorName: "Charlie Davis",
            projectRole: "UI/UX Designer",
            progression: 50,
            deadline: 80,
            colorCode: "success"
        },
        {
            projectName: "Product Launch",
            creatorName: "Diane Evans",
            projectRole: "Product Manager",
            progression: 60,
            deadline: 90,
            colorCode: "warning"
        },
        {
            projectName: "App Development",
            creatorName: "Frank Green",
            projectRole: "Software Engineer",
            progression: 35,
            deadline: 65,
            colorCode: "error"
        },
        {
            projectName: "SEO Optimization",
            creatorName: "Grace Hill",
            projectRole: "SEO Specialist",
            progression: 45,
            deadline: 75,
            colorCode: "primary"
        },
        {
            projectName: "Content Creation",
            creatorName: "Henry Ivy",
            projectRole: "Content Writer",
            progression: 55,
            deadline: 85,
            colorCode: "secondary"
        },
        {
            projectName: "Data Analysis",
            creatorName: "Ivy Jones",
            projectRole: "Data Scientist",
            progression: 70,
            deadline: 95,
            colorCode: "accent"
        },
    ];

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(projectContent.length > 5 ? 5 : projectContent.length);
    const [currentMonthDays, setCurrentMonthDays] = useState(31);
    const [startDay, setStartDay] = useState("col-span-0");
    const [dayOfMonth, setDayOfMonth] = useState(1);
    const [selectedDayOfMonth, setSelectedDayOfMonth] = useState(1);
    
    function goBack() {
        setStart(cs => cs - 5);
        setEnd(ce => ce - 5);
    }

    function goForward() {
        setStart(cs => cs + 5);
        setEnd(ce => ce + 5 > projectContent.length ? projectContent.length : ce + 5);
    }

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        setCurrentMonthDays(() => daysInMonth(year, month));
        const day = new Date(year + "-" + (month + 1) + "-01").getDay();
        setStartDay("col-span-" + day);
        setDayOfMonth(date.getDate());
        // setSelectedDayOfMonth(date.getDate());
        setSelectedDayOfMonth(28);
    }, []);
    
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

    function getOrdinalSuffix(number) {
        let j = number % 10;
        let k = number % 100;
    
        if (j == 1 && k != 11) {
            return number + "st";
        }
        if (j == 2 && k != 12) {
            return number + "nd";
        }
        if (j == 3 && k != 13) {
            return number + "rd";
        }
        return number + "th";
    }
    
    return (
        <div className={`flex-1 p-10 bg-base-300`}>
            <div className={`grid grid-cols-3 gap-0`}>
                <div className={`col-span-2 p-5 rounded-xl flex items-center gap-3 flex-col`}>
                    <p className={`text-2xl font-medium w-full flex items-center justify-between`}>Project Progression <button className={`btn btn-ghost flex items-center gap-2`}>View All <MdArrowRightAlt size={20} /></button></p>
                    <div className={`p-5 rounded-xl bg-base-100 w-full`}>
                        <div className={`grid grid-cols-9 gap-4`}>
                            <p className={`text-sm col-span-2 font-bold`}>Project Name</p>
                            <p className={`text-sm col-span-2 font-bold`}>Creator</p>
                            <p className={`text-sm col-span-3 font-bold`}>Progress</p>
                            <div className={`flex items-center col-span-2 w-full ml-5`}>
                                <p className={`text-sm font-bold`}>Deadline</p>
                            </div>
                        </div>
                        <div className="divider divider-neutral"></div>
                        {projectContent.slice(start, end).map((project, index) => {
                            const colorCode = project.colorCode;
                            console.log(colorCode)
                            return (
                                <div className={`grid grid-cols-9 gap-4 mb-5`} key={index}>
                                    <p className={`text-lg flex items-center col-span-2 line-clamp-1`}>{project.projectName}</p>
                                    <div className={`flex gap-3 col-span-2`}>
                                        <div className={`flex items-center`}>
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                                    <span className="text-xl">{project.creatorName.substring(0, 1).toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={`font-semibold`}>{project.creatorName}</p>
                                            <p className={`text-sm`}>{project.projectRole}</p>
                                        </div>
                                    </div>
                                    <div className={`col-span-3 flex items-center justify-center`}><progress className={`progress ${colorCode === 'primary' ? 'progress-primary' : colorCode === 'secondary' ? 'progress-secondary' : colorCode === 'accent' ? 'progress-accent' : colorCode === 'info' ? 'progress-info' : colorCode === 'success' ? 'progress-success' : colorCode === 'warning' ? 'progress-warning' : 'progress-error'} w-full h-3 col-span-2`} value={project.progression} max="100"></progress></div>
                                    <div className={`flex items-center col-span-2 w-full ml-5`}>
                                        <p className={`text-right mr-2 flex items-center px-2 py-1 h-fit rounded-full bg-neutral text-neutral-content w-fit gap-2`}><FiClock size={20}/> {project.deadline} Days</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="divider divider-neutral"></div>
                        <div className={`flex justify-end gap-2`}>
                            <p className={`text-lg flex items-center mr-2`}>{start + 1} - {end} of {projectContent.length}</p>
                            <span onClick={start !== 0 ? goBack : null} className={`rounded-full border-2 border-gray-600 ${start !== 0 && `cursor-pointer`} mr-1`}>
                                <FaChevronLeft size={15} className={`m-2`} fill={start === 0 ? "gray" : "white"} />
                            </span>
                            <span onClick={end !== projectContent.length ? goForward : null} className={`rounded-full border-2 ${end !== projectContent.length && `cursor-pointer`} border-gray-600`}>
                                <FaChevronRight size={15} className={`m-2`} fill={end === projectContent.length ? "gray" : "white"} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-xl flex flex-col gap-3`}>
                    <p className={`text-2xl font-medium w-full flex items-center justify-between`}>Messages <button className={`btn btn-ghost flex items-center gap-2`}>View All <MdArrowRightAlt size={20} /></button></p>
                    <div className={`p-5 rounded-xl bg-base-100 h-full`}>
                        <div className={`flex items-center gap-3 mb-8`}>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring-accent ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <p className={`text-lg font-bold text-gray-300`}>Sandra Monkey</p>
                                <p className={`text-base line-clamp-1 font-semibold`}>I wanted to ask a few questions about the Fresh Produce project. Free to talk?</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-3 mb-8`}>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring-accent ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
                                </div>
                            </div>
                            <div>
                                <p className={`text-lg font-bold text-gray-300`}>John Doe</p>
                                <p className={`text-base line-clamp-1 font-semibold`}>Hey there Spewing, how's it going? Free to meet aout Fresh Produce?</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-3 mb-8`}>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring-accent ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png" />
                                </div>
                            </div>
                            <div>
                                <p className={`text-lg font-bold text-gray-300`}>Mary Chan</p>
                                <p className={`text-base line-clamp-1 font-semibold`}>What is goody in da hoody buddy?</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-3 mb-8`}>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring-accent ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <p className={`text-lg font-bold text-gray-300`}>Sandra Monkey</p>
                                <p className={`text-base line-clamp-1 font-semibold`}>I wanted to ask a few questions about the Fresh Produce project. Free to talk?</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-3`}>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring-accent ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
                                </div>
                            </div>
                            <div>
                                <p className={`text-lg font-bold text-gray-300`}>John Doe</p>
                                <p className={`text-base line-clamp-1 font-semibold`}>Hey there Spewing, how's it going? Free to meet aout Fresh Produce?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-xl flex items-center gap-3 flex-col`}>
                    <p className={`text-2xl font-medium w-full flex items-center justify-between`}>Calendar <button className={`btn btn-ghost flex items-center gap-2 opacity-0 cursor-default`}>View All <MdArrowRightAlt size={20} /></button></p>
                    <div className={`p-5 rounded-xl bg-base-100 w-full`}>
                        <div className={`flex items-center w-11/12 mx-auto text-lg mb-5`}>
                            <span className={`rounded-full cursor-pointer ml-3`}>
                                <FaChevronLeft size={15} className={`m-2`} fill="white" />
                            </span>
                            <p className={`mr-1 ml-auto`}>{new Date().toLocaleString('default', { month: 'long' })}</p>
                            <p className={`mr-1`}>{getOrdinalSuffix(selectedDayOfMonth)}</p>
                            <p className={`mr-auto`}>{new Date().getFullYear()}</p>
                            <span className={`rounded-full cursor-pointer mr-3`}>
                                <FaChevronRight size={15} className={`m-2`} fill="white" />
                            </span>
                        </div>
                        <div className={`grid grid-cols-7 w-11/12 mx-auto`}>
                            <p className={`text-center mb-2 font-medium`}>Su</p>
                            <p className={`text-center mb-2 font-medium`}>Mo</p>
                            <p className={`text-center mb-2 font-medium`}>Tu</p>
                            <p className={`text-center mb-2 font-medium`}>We</p>
                            <p className={`text-center mb-2 font-medium`}>Th</p>
                            <p className={`text-center mb-2 font-medium`}>Fr</p>
                            <p className={`text-center mb-2 font-medium`}>Sa</p>
                            <div className={`grid grid-cols-subgrid ${startDay}`}>
                                <p className={`col-start-1`}></p>
                            </div>
                            {"hi ".repeat(currentMonthDays - 1).trimEnd().split(" ").map((_, index) => {
                                return (
                                    <span onClick={() => setSelectedDayOfMonth(index + 1)} className={`rounded-full ${index + 1 === selectedDayOfMonth  ? `bg-accent text-accent-content` : index + 1 === dayOfMonth ? `border-sky-300 box-border border bg-opacity-80 hover:bg-gray-600` : 'hover:bg-gray-600'} w-fit mx-auto mb-1 cursor-pointer transition-all duration-200 ease-in-out`}><p className={`text-center py-2 ${index < 9 ? `px-4` : `px-3`}`}>{index + 1}</p></span>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-xl flex items-center gap-3 flex-col`}>
                    <p className={`text-2xl font-medium w-full flex items-center justify-between`}>Tasks <button className={`btn btn-ghost flex items-center gap-2`}>View All <MdArrowRightAlt size={20} /></button></p>
                    <div className={`p-5 rounded-xl bg-base-100 w-full`}></div>
                </div>
                <div className={`p-5 rounded-xl flex items-center gap-3 flex-col`}>
                    <p className={`text-2xl font-medium w-full flex items-center justify-between`}>Teams <button className={`btn btn-ghost flex items-center gap-2`}>View All <MdArrowRightAlt size={20} /></button></p>
                    <div className={`p-5 rounded-xl bg-base-100 w-full`}></div>
                </div>
            </div>
        </div>
    )
}