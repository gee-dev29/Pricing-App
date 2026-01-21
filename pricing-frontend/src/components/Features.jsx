export default function Features() {
    return (
        <div className="py-20 bg-slate-900" id="features">
            <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
                <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                    <p className="text-gray-300">
                        Description of feature 1. This is a great feature that
                        helps with something.
                    </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                    <p className="text-gray-300">
                        Description of feature 2. Another amazing feature for
                        your needs.
                    </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                    <p className="text-gray-300">
                        Description of feature 3. This feature makes everything
                        better.
                    </p>
                </div>
            </div>
        </div>
    );
}
