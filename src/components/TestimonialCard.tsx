import { Star } from 'lucide-react';

export default function TestimonialCard({ name, role, content, rating }:any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div>
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}