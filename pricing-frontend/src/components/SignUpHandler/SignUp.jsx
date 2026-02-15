import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiUser, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import useFormFields from "../hooks/UseFormFields";
import PasswordStrengthMeter from "../utils/PasswordStrengthMeter";
import { evaluatePasswordStrength } from "../utils/PasswordStrength";
import { handleSignUpSubmit } from "./HandleSubmit";
import Logo from "../../assets/react.svg";
import BackgroundImage from "../image/image_1_1768833455188.jpg";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const { fieldValues, handleChange } = useFormFields({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const isMatchingPasswords =
        fieldValues.password !== "" &&
        fieldValues.confirmPassword !== "" &&
        fieldValues.password === fieldValues.confirmPassword;
    const passwordScore = evaluatePasswordStrength(fieldValues.password);
    const isPasswordStrongEnough = passwordScore > 4;
    const canSubmit = isPasswordStrongEnough && isMatchingPasswords;

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[url('../image/image_1_1768821404407.jpg')] ">
            {/* // left section  */}
            <div>
                {/* Navbar */}
                <nav className=" flex justify-between items-center p-4 font-sans">
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="logo" />
                        <span className="text-xl text-bold">Pricing App</span>
                    </div>
                </nav>
                {/* Form */}
                <div className="flex flex-col justify-center items-center px-4 py-10 lg:h-[90vh]">
                    <form
                        onSubmit={(e) => handleSignUpSubmit(e, navigate, fieldValues, canSubmit)}
                        className="w-full border border-slate-800 p-10 rounded-md max-w-md shadow-lg hover:border-blue-700 hover:ring-2 hover:ring-blue-500/40"
                    >
                        <div>
                            <div className=" flex justify-between space-x-7 mb-6  ">
                                {/* First and Last Name  */}
                                {/* first name */}
                                <div className="relative group">
                                    <FiUser
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                    ${fieldValues.firstName
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-900 pl-10 text-white p-2 rounded-md w-full border border-transparent hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none placeholder-white/35 hover:placeholder-white/50"
                                        type="text"
                                        value={fieldValues.firstName}
                                        id="firstName"
                                        onChange={handleChange("firstName")}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                {/* last name */}
                                <div className="relative group">
                                    <FiUser
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                    ${fieldValues.lastName
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-900 pl-10 text-white p-2 rounded-md w-full border border-transparent hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none placeholder-white/35 hover:placeholder-white/50"
                                        type="text"
                                        value={fieldValues.lastName}
                                        id="lastName"
                                        onChange={handleChange("lastName")}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
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
                                    <PasswordStrengthMeter
                                        password={fieldValues.password}
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff size={15} />
                                        ) : (
                                            <FiEye size={15} />
                                        )}
                                    </button>
                                </div>
                                {/* confirm password input */}
                                <div className="relative group">
                                    <FiLock
                                        size={15}
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-opacity duration-200 group-focus-within:opacity-0
                                            ${fieldValues.confirmPassword
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }`}
                                    />
                                    <input
                                        className="bg-slate-900 pl-10 text-white p-2 rounded-md w-full border border-transparent hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none placeholder-white/35 hover:placeholder-white/50"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="confirmPassword"
                                        value={fieldValues.confirmPassword}
                                        onChange={handleChange(
                                            "confirmPassword",
                                        )}
                                        placeholder="Confirm Password"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                    >
                                        {showConfirmPassword ? (
                                            <FiEyeOff size={15} />
                                        ) : (
                                            <FiEye size={15} />
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value={
                                            !fieldValues.password
                                                ? "Create Account"
                                                : !isPasswordStrongEnough
                                                    ? "Password Too Weak"
                                                    : !isMatchingPasswords
                                                        ? "Passwords Do Not Match"
                                                        : "Create Account"
                                        }
                                        className={`bg-blue-500 text-white p-2 mt-5 rounded-md w-full border-0 outline-none focus:ring-0 ${canSubmit
                                                ? "hover:bg-blue-600 cursor-pointer"
                                                : "opacity-50 cursor-not-allowed"
                                            }`}
                                        disabled={!canSubmit}
                                    />
                                    <hr className="my-6 border-t border-gray-500" />
                                </div>
                            </div>
                            {/* Social Account Sign Up */}
                            <div className="mt-10">
                                <div className=" flex justify-between space-x-3 mb-4 ">
                                    {/* Google Sign Up */}
                                    <div className=" p-3 pl-4 pr-5 text-xs font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                        <FcGoogle />
                                        <span>Sign up with Google</span>
                                    </div>
                                    {/* Microsoft Sign Up */}
                                    <div>
                                        <div className=" p-3 pl-4 pr-5 text-xs border font-light border-gray-600 flex justify-center items-center rounded-md space-x-2 hover:border-slate-800 cursor-pointer">
                                            <FaMicrosoft />
                                            <span>Sign up with Microsoft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white p-3 pl-4 pr-5 text-xs font-light rounded-md border border-gray-600 flex justify-center items-center space-x-2 hover:border-slate-800 cursor-pointer">
                                    <SiApple />
                                    <span>Sign up with Apple</span>
                                </div>
                                <div className="mr-10 flex justify-center items-center mt-6">
                                    <p className="text-sm">
                                        Already have an account?{" "}
                                        <a
                                            href="/login"
                                            className="text-blue-500 hover:text-white"
                                        >
                                            Log in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* // right section */}
            {/* image section */}
            <div
                className="relative hidden lg:flex flex-col lg:justify-center lg:items-center p-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl text-left">
                    <div className="border rounded-[30px] w-fit px-6 pt-2 mb-5 border-b-emerald-700 border-t-amber-700 border-l-pink-700 border-r-purple-700">
                        <h2 className="text-3xl font-semibold mb-4 text-blue-400">
                            Welcome to my Pricing App
                        </h2>
                    </div>

                    <p className="text-[17px] leading-relaxed">
                        Join us today and take advantage of our exclusive
                        pricing plans{" "}
                        <span className="text-white font-medium">
                            designed to fit your
                        </span>{" "}
                        business’s unique needs. Whether you're a small business
                        or a large{" "}
                        <span className="text-white font-medium">
                            enterprise
                        </span>
                        , we've got you covered.
                        <br />
                        <br />
                        Start your free trial today and take your business{" "}
                        <span className="text-white font-medium">
                            to the next level
                        </span>{" "}
                        with our affordable pricing plans.
                    </p>
                </div>
            </div>
        </div>
    );
}
