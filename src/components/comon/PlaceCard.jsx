import Rating from './Rating.jsx';

export default function PlaceCard({ name, img, des, stars, price, category, address }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div
                className="w-full h-44 sm:h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img})` }}
            >
                {price && (
                    <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-xs font-semibold px-2.5 py-1 rounded-lg shadow-xs text-gray-800">
                        {price}
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between gap-2">
                <div>
                    <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{des}</p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Rating rating={stars} />
                </div>
                <div className='flex gap-x-2'>
                    <span className='text-[#006971] p-2 font-bold'>{category}</span>
                    <span className='text-[#006971] p-2 font-bold'>{address}</span>
                </div>
            </div>
        </div>
    );
}