
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, role, company, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-concrete-100">
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, index) => (
          <Star 
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-orange-500 fill-orange-500' : 'text-concrete-300'
            }`} 
          />
        ))}
      </div>
      <p className="text-concrete-600 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-concrete-800">{author}</p>
        <p className="text-sm text-concrete-500">{role}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
