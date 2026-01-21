export default function Footer() {
    return (
        <div className="bg-slate-800 text-center p-6 mt-20">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Godwin's Pricing App. All
                rights reserved.
            </p>
        </div>
    );
}