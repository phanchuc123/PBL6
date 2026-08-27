import { Star } from "lucide-react";

export default function Rating({ rating = 0 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className="fill-orange-400 text-orange-400"
          />
        ))}
      </div>

      <span className="ml-1 text-[11px] font-semibold text-gray-700">
        {rating}
      </span>
    </div>
  );
}

