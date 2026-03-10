import Link from 'next/link';

/**
 * Navigation Bar component.
 * Uses 'sticky' positioning to stay at the top during scroll.
 */
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Branding / Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-legal-900 uppercase tracking-tighter">
          Maître <span className="text-legal-gold">Gavairon</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-zinc-600">
          <Link href="/expertises" className="hover:text-legal-900 transition">Expertises</Link>
          <Link href="/about" className="hover:text-legal-900 transition">The Firm</Link>
          <Link 
            href="/contact" 
            className="bg-legal-900 text-white px-6 py-2 rounded-sm hover:bg-legal-gold transition-colors shadow-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}