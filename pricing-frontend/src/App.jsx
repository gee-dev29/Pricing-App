import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white w-full sm:w-full mx-auto">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Hero />
                            <Features />
                            <Pricing />
                            <Testimonials />
                            <Footer />
                        </>
                    }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
