import Catalog from '../components/comon/Catalog';
import PlaceCard from '../components/comon/PlaceCard';

import heroImg from '../assets/images/cr.jpg';
import bien from '../assets/images/bien.jpg';
import nui from '../assets/images/nui.jpg';
import amthuc from '../assets/images/amthuc.jpg';
import vanhoa from '../assets/images/vanhoa.jpg';
import bana1 from '../assets/images/bana1.jpg';
import bandao from '../assets/images/bandao.jpg';

export default function Home() {
    return (
        <section className="w-full space-y-12 pb-8">
            {/* Hero Section */}
            <div 
                className="w-full h-[450px] md:h-[500px] bg-cover bg-center rounded-2xl flex items-center justify-center text-white shadow-md relative overflow-hidden"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="bg-black/50 p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-4 backdrop-blur-xs">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Khám Phá Đà Nẵng Cùng Smart Trip</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                        <input 
                            type="text" 
                            placeholder="Bạn muốn đến đâu ở Đà Nẵng?" 
                            className="w-full sm:w-[320px] bg-white text-gray-800 placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006971]" 
                        />
                        <button 
                            type="submit" 
                            className="w-full sm:w-auto bg-[#006971] hover:bg-[#005258] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>

            {/* Catalog Section */}
            <div className="w-full max-w-7xl mx-auto px-2">
                <h2 className="text-black font-bold text-2xl md:text-3xl mb-6">Khám phá theo danh mục</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <Catalog name="Biển đảo" img={bien} />
                    <Catalog name="Núi non" img={nui} />
                    <Catalog name="Ẩm thực" img={amthuc} />
                    <Catalog name="Văn hóa" img={vanhoa} />
                </div>
            </div>

            {/* Featured Places Section */}
            <div className="w-full max-w-7xl mx-auto px-2">
                <h2 className="text-black font-bold text-2xl md:text-3xl mb-6">Địa điểm nổi tiếng</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <PlaceCard name="Bà Nà Hills" img={bana1} des="Khu du lịch trên núi tuyệt đẹp" stars="4.8" />
                    <PlaceCard name="Cầu Vàng" img={bandao} des="Biểu tượng kiến trúc độc đáo" stars="4.0" />
                    <PlaceCard name="Bán đảo Sơn Trà" img={nui} des="Thiên nhiên hoang sơ hùng vĩ" stars="4.6" />
                    <PlaceCard name="Biển Mỹ Khê" img={bien} des="Bãi biển trong xanh mát mẻ" stars="4.3" />
                </div>
            </div>
        </section>
    );
}