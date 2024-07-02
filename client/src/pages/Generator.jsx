import { useState } from "react"
import { MdArrowRight, MdArrowRightAlt } from "react-icons/md";
import viteLogo from '../assets/vite_logo.png';
import remixLogo from '../assets/remix-logo.png';

export default function Generator() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className={`flex-1 p-10 bg-base-300`}>
            <div className={`w-9/12 rounded-box bg-base-100 p-5 mx-auto`}>
                <div className={`w-full grid grid-cols-4 gap-5 mb-5`}>
                    <div className={`${currentStep === 1 ? 'border-white' : currentStep > 1 ? 'border-accent' : 'border-neutral'} flex items-center flex-row gap-3 rounded-box border-2 p-3`}>
                        <p className={`p-2 px-4 rounded-full bg-neutral font-semibold`}>1</p>
                        <div className={``}>
                            <p className={`font-bold`}>Select a React Framework</p>
                        </div>
                    </div>
                    <div className={`${currentStep === 2 ? 'border-white' : currentStep > 2 ? 'border-accent' : 'border-neutral'} flex items-center flex-row gap-2 rounded-box border-2 p-3`}>
                        <p className={`p-2 px-4 rounded-full bg-neutral font-semibold`}>2</p>
                        <div className={``}>
                            <p className={`font-bold`}>Select a UI Tool</p>
                        </div>
                    </div>
                    <div className={`${currentStep === 3 ? 'border-white' : currentStep > 3 ? 'border-accent' : 'border-neutral'} flex items-center flex-row gap-2 rounded-box border-2 p-3`}>
                        <p className={`p-2 px-4 rounded-full bg-neutral font-semibold`}>3</p>
                        <div className={``}>
                            <p className={`font-bold`}>Select a Backend Provider</p>
                        </div>
                    </div>
                    <div className={`${currentStep === 4 ? 'border-white' : currentStep > 4 ? 'border-accent' : 'border-neutral'} flex items-center flex-row gap-2 rounded-box border-2 p-3`}>
                        <p className={`p-2 px-4 rounded-full bg-neutral font-semibold`}>4</p>
                        <div className={``}>
                            <p className={`font-bold`}>Select an Authentication Provider</p>
                        </div>
                    </div>
                </div>
                <div className={`mb-5 rounded-box border-2 border-neutral p-5`}>
                    {currentStep === 1 && (
                        <div className={`flex items-center gap-5`}>
                            <label className="label cursor-pointer flex items-center flex-row gap-2 px-5 py-5 rounded-box border-2 border-neutral hover:bg-neutral">
                                <input type="radio" name="radio-10" className="radio radio-sm" defaultChecked />
                                <img src={viteLogo} alt="vite" className={`w-8 h-8`} />
                                <p className={`font-bold text-lg text-white`}>Vite</p>
                            </label>
                            <label className="label cursor-pointer flex items-center flex-row gap-2 px-5 py-5 rounded-box border-2 border-neutral hover:bg-neutral">
                                <input type="radio" name="radio-10" className="radio radio-sm" />
                                <img src={remixLogo} alt="vite" className={`w-8 h-8`} />
                                <p className={`font-bold text-lg text-white`}>Remix</p>
                            </label>
                            <label className="label cursor-pointer flex items-center flex-row gap-2 px-5 py-5 rounded-box border-2 border-neutral hover:bg-neutral">
                                <input type="radio" name="radio-10" className="radio radio-sm" />
                                <img src={viteLogo} alt="vite" className={`w-8 h-8`} />
                                <p className={`font-bold text-lg text-white`}>Next.js</p>
                            </label>
                            <label className="label cursor-pointer flex items-center flex-row gap-2 px-5 py-5 rounded-box border-2 border-neutral hover:bg-neutral">
                                <input type="radio" name="radio-10" className="radio radio-sm" />
                                <img src={viteLogo} alt="vite" className={`w-8 h-8`} />
                                <p className={`font-bold text-lg text-white`}>Create React App</p>
                            </label>
                            <label className="label cursor-pointer flex items-center flex-row gap-2 px-5 py-5 rounded-box border-2 border-neutral hover:bg-neutral">
                                <input type="radio" name="radio-10" className="radio radio-sm" />
                                <img src={viteLogo} alt="vite" className={`w-8 h-8`} />
                                <p className={`font-bold text-lg text-white`}>Gatsby</p>
                            </label>
                        </div>
                    )}
                </div>
                <div className={`w-full flex justify-end`}>
                    <button onClick={() => setCurrentStep((cS) => cS + 1)} className={`btn btn-outline flex items-center gap-3 border-neutral border-2`}>Next <MdArrowRightAlt size={25} /></button>
                </div>
            </div>
        </div>
    )
}