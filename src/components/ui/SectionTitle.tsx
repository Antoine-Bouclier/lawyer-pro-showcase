interface SectionTitleProps {
	title: string;
	subtitle?: string;
	light?: boolean; // Option to use white text on dark backgrounds
  }
  
  /**
   * Reusable Section Title component.
   * Ensures consistent typography and gold accent line across the site.
   */
  export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
	return (
	  <div className="mb-12">
		{/* Title with Serif font for a premium legal look */}
		<h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-legal-900'}`}>
		  {title}
		</h2>
		
		{/* Gold accent line - The firm's signature */}
		<div className="w-20 h-1 bg-legal-gold mb-6" />
		
		{/* Optional subtitle */}
		{subtitle && (
		  <p className={`max-w-2xl text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
			{subtitle}
		  </p>
		)}
	  </div>
	);
  }