import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import useFormFields from "./hooks/UseFormFields";
import BackgroundImage from "./image/image_1_1768833455188.jpg";
import { handleLoginSubmit } from "./SignUpHandler/HandleSubmit";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { fieldValues, handleChange } = useFormFields({
        email: "",
        password: "",
    });

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* // left section  */}
            <div>
                {/* form */}
                <div className="flex flex-col justify-center items-center px-4 py-10 lg:h-[90vh]">
                    <form
                        onSubmit={(e) => handleLoginSubmit(e, navigate, fieldValues)}
                        className="w-full border border-slate-800 p-10 rounded-md max-w-md shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500/40"
                    >
                        <div>
                            <div className="space-y-4">
                                {/* Email */}
                                <div className="relative group">
                                    <FiMail
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                            ${fieldValues.email
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-900 pl-10 text-white p-2 rounded-md w-full border border-transparent hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none placeholder-white/35 hover:placeholder-white/50"
                                        type="email"
                                        id="email"
                                        value={fieldValues.email}
                                        onChange={handleChange("email")}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                {/* password input */}
                                <div className="relative group">
                                    <FiLock
                                        size={15}
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                                                            ${fieldValues.password
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-900 pl-10 text-white p-2 rounded-md w-full border border-transparent hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none placeholder-white/35 hover:placeholder-white/50
                                                                        autofill:bg-slate-900 autofill:text-white [&:-webkit-autofill]:bg-slate-900 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(15,23,42)]"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        id="password"
                                        value={fieldValues.password}
                                        onChange={handleChange("password")}
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400  hover:text-white focus:outline-none"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <FiEyeOff size={15} />
                                        ) : (
                                            <FiEye size={15} />
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value="Log in"
                                        className="bg-blue-500 text-white p-2 mt-5 rounded-md w-full border-0 outline-none hover:bg-blue-600 cursor-pointer"
                                    />
                                    <hr className="my-6 border-t border-gray-500" />
                                </div>
                            </div>
                            {/* Social Account Log in */}
                            <div className="mt-10">
                                <div className=" flex justify-between space-x-3 mb-4 ">
                                    {/* Google Sign Up */}
                                    <div className=" p-3 pl-4 pr-5 text-xs font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                        <FcGoogle />
                                        <span>Log in with Google</span>
                                    </div>
                                    {/* Microsoft Log in */}
                                    <div>
                                        <div className=" p-3 pl-4 pr-5 text-xs border font-light border-gray-600 flex justify-center items-center rounded-md space-x-2 hover:border-slate-800 cursor-pointer">
                                            <FaMicrosoft />
                                            <span>Log in with Microsoft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white p-3 pl-4 pr-5 text-xs font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                    <SiApple />
                                    <span>Log in with Apple</span>
                                </div>
                                <div className="mr-10 flex justify-center items-center mt-6">
                                    <p className="text-sm">
                                        Not a member yet?{" "}
                                        <a
                                            href="/signup"
                                            className="text-blue-500 hover:text-white"
                                        >
                                            Join
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* // right section */}
            <div
                className="hidden lg:flex flex-col bg-slate-950 lg:justify-center lg:items-center p-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
        </div>
    );
};

export default Login;
