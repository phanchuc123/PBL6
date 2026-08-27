export default function Header() {
    return (
        <header className="bg-white shadow-md w-full py-4">
            <div className="max-w-screen mx-auto px-4 flex justify-between items-center">
                <div className="text-[#006971] font-bold text-xl">
                    Smart Trip Đà Nẵng
                </div>
                <div className="flex space-x-6 gap-x-8">
                    <a href="#" className="text-[#006971] hover:font-semibold text-sm">Home</a>
                    <a href="#" className="text-[#006971] hover:font-semibold text-sm">Explore</a>
                    <a href="#" className="text-[#006971] hover:font-semibold text-sm">Trip</a>
                    <a href="#" className="text-[#006971] hover:font-semibold text-sm">Suggestions</a>
                </div>
                <div>
                    <i className="fa-solid fa-user text-[#006971] text-lg"></i>
                </div>
            </div>
        </header>
    );
}