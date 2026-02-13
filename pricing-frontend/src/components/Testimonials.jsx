export default function Testimonials() {
    return (
        <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        "This React course transformed my understanding of web
                        development. The hands-on projects were especially
                        helpful!"
                    </p>
                    <span className="font-semibold">- Jane D.</span>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        "Godwin's teaching style is clear and engaging. I highly
                        recommend this course to anyone looking to learn React."
                    </p>
                    <span className="font-semibold">- Mark S.</span>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        "The course content was well-structured and easy to
                        follow. I've built several projects since completing
                        it!"
                    </p>
                    <span className="font-semibold">- Lisa K.</span>
                </div>
            </div>
        </div>
    );
}
