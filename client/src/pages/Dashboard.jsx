import { FiClock } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";

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
    
    function goBack() {
        setStart(cs => cs - 5);
        setEnd(ce => ce - 5);
    }

    function goForward() {
        setStart(cs => cs + 5);
        setEnd(ce => ce + 5 > projectContent.length ? projectContent.length : ce + 5);
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
                    <div className={`p-5 rounded-xl bg-base-100`}></div>
                </div>
            </div>
        </div>
    )
}