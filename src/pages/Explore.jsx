import { useState } from "react";

export default function Explore() {
    const [category, setCategory] = useState("Biển");

    const categories = [
        "Biển",
        "Văn hóa",
        "Ẩm thực",
        "Giải trí",
    ];

    return (
        <section className="w-full space-y-12 pb-8 flex gap-6">
            <div className="w-1/4 h-fit flex flex-col bg-white rounded-xl p-5 shadow-sm border">
                <div className="flex items-center justify-between mb-5">
                    <span className="font-semibold text-gray-800">
                        Bộ lọc
                    </span>
                    <button
                        onClick={() => setCategory("")}
                        className="text-sm text-gray-500 hover:text-orange-500">
                        Xóa lọc
                    </button>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">DANH MỤC</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {categories.map((item) => (
                            <label
                                key={item}
                                className={`cursor-pointer px-4 py-2 rounded-full text-sm transition
                                    ${
                                        category === item
                                            ? "bg-[#007C83] text-white"
                                            : "bg-[#E2F5F6] text-[#007C83] hover:bg-[#CDEDEF]"
                                    }
                                `}
                            >
                                <input type="radio" name="category" value={item} checked={category === item} onChange={() => setCategory(item)} className="hidden"/>
                                {item}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-3/4 bg-green-500">
                <h2 className="text-2xl font-bold">
                    {category ? `Địa điểm: ${category}` : "Tất cả địa điểm"}
                </h2>
            </div>
        </section>
    );
}