export default function Pricing() {
    return (
        <div className="py-20 bg-slate-900" id="pricing">
            <h2 className="text-3xl font-bold text-center mb-10">
                Pricing Plans
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
                <div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Basic</h3>
                    <p className="text-4xl font-bold mb-4">
                        $9<span className="text-base font-normal">/mo</span>
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li>✔ Feature A</li>
                        <li>✔ Feature B</li>
                        <li>✔ Feature C</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                        Choose Plan
                    </button>
                </div>
                <div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Pro</h3>
                    <p className="text-4xl font-bold mb-4">
                        $29<span className="text-base font-normal">/mo</span>
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li>✔ Feature A</li>
                        <li>✔ Feature B</li>
                        <li>✔ Feature C</li>
                        <li>✔ Feature D</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                        Choose Plan
                    </button>
                </div>
                <div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                    <p className="text-4xl font-bold mb-4">
                        $99<span className="text-base font-normal">/mo</span>
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li>✔ Feature A</li>
                        <li>✔ Feature B</li>
                        <li>✔ Feature C</li>
                        <li>✔ Feature D</li>
                        <li>✔ Feature E</li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
