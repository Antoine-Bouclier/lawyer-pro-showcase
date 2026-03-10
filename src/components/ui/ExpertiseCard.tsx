import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ExpertiseProps {
  id: string; // Add the ID here
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ExpertiseCard({ id, title, description, Icon }: ExpertiseProps) {
  return (
    // We wrap everything in a Link component pointing to our dynamic route
    <Link href={`/expertises/${id}`} className="block group">
      <div className="p-8 bg-white border border-slate-200 rounded-lg hover:border-legal-gold transition-all duration-300 h-full">
        <div className="mb-4 text-slate-700 group-hover:text-legal-900">
          <Icon size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-serif font-bold text-legal-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
        
        {/* Visual cue for the user */}
        <span className="inline-block mt-4 text-sm font-bold text-legal-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More +
        </span>
      </div>
    </Link>
  );
}