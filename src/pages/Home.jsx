import Catalog from '../components/comon/Catalog';
import heroImg from '../assets/images/cr.jpg';
import bien from '../assets/images/bien.jpg';
import nui from '../assets/images/nui.jpg';
import amthuc from '../assets/images/amthuc.jpg';
import vanhoa from '../assets/images/vanhoa.jpg';

export default function Home() {
    return (
        <section className="w-full space-y-12">
            <div 
                className="w-full h-[450px] md:h-[500px] bg-cover bg-center rounded-2xl flex items-center justify-center text-white shadow-md relative overflow-hidden"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="bg-black/50 p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-4 backdrop-blur-xs">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Khám Phá Đà Nẵng Cùng Smart Trip</h1>
                    <p className="text-base md:text-xl text-gray-200">Trải nghiệm chuyến đi tuyệt vời và đáng nhớ</p>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-2">
                <h2 className="text-black font-bold text-2xl md:text-3xl mb-6">Khám phá theo danh mục</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <Catalog name="Biển đảo" img={bien} />
                    <Catalog name="Núi non" img={nui} />
                    <Catalog name="Ẩm thực" img={amthuc} />
                    <Catalog name="Văn hóa" img={vanhoa} />
                </div>
            </div>
        </section>
    );
}