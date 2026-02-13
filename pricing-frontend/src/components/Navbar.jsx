import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";

export default function Navbar() {
    return (
        <nav className="bg-slate-900 px-4 py-3 gap-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="logo" className=" h-8 w-8" />
                <span className=" text-xl font-bold hover:ring-1 :hoverring-blue-700 rounded-xl hover:border hover:p-0.5">gEE.io</span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
                <a href="#home" className="hover:text-gray-400">
                    Home
                </a>
                <a href="#Features" className="hover:text-gray-400">
                    Features
                </a>
                <a href="#Pricing" className="hover:text-gray-400">
                    Pricing
                </a>
                <a href="#Testimonials" className="hover:text-gray-400">
                    Testimonials
                </a>
            </div>
            <div>
                <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}
