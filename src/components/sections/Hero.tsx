import Link from 'next/link';

/**
 * Hero Section component.
 * Displays the main value proposition and call to action.
 */
export default function Hero() {
  return (
    <section className="relative bg-legal-900 py-32 px-6 overflow-hidden">
      {/* Background decoration (optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-legal-gold rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Excellence in <span className="text-legal-gold italic">Legal Defense</span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          The law firm provides strategic legal counsel and dedicated representation 
          to protect your interests in complex business and criminal matters.
        </p>

        {/* Buttons (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="px-8 py-4 bg-legal-gold text-legal-900 font-bold rounded-sm hover:bg-yellow-600 transition-all duration-300 shadow-lg"
          >
            Schedule a Consultation
          </Link>
          <Link 
            href="/about"
            className="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all"
          >
            Meet the Attorneys
          </Link>
        </div>
      </div>
    </section>
  );
}