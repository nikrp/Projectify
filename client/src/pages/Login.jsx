import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className={`h-screen flex justify-center items-center`} data-theme="dark">
            <button className={`btn btn-neutral fixed top-5 left-5`} onClick={() => navigate('/', { replace: true })}>←  Back</button>
            <div className="card bg-neutral text-neutral-content w-2/6 shadow-md">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">Welcome Back User!</h2>
                    <div className={`px-3 py-4 w-full`}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Email</span>
                            </div>
                            <input type="email" placeholder="Enter your email" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg">Password</span>
                            </div>
                            <input type="password" placeholder="Enter your password" className="input input-bordered input-lg w-full" />
                        </label>
                        <button className={`mt-4 btn btn-primary text-xl w-full`}>Login</button>
                        <div className="divider">OR</div>
                        <button className={`px-2 py-2 rounded-lg bg-blue-500 text-black text-xl text-left w-full flex items-center`}>
                            <div className={`rounded-lg bg-white w-fit p-2`}>
                                <FcGoogle className={`h-6 w-6`} />
                            </div>
                            <span className={`ml-auto mr-auto font-semibold text-white`}>
                                Login with Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}