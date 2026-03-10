import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

/**
 * About Page - Presenting the law firm's history, values and team.
 * All French apostrophes are escaped to avoid linting errors.
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-legal-900 py-24 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif italic mb-4">Le Cabinet</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {"Un engagement total pour la défense des victimes de dommages corporels."}
        </p>
      </section>

      {/* Presentation Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <SectionTitle 
              title="Une expertise au service de l&apos;humain" 
              subtitle="Un cabinet dédié à la réparation intégrale des victimes."
            />
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                {"Fondé par Maître Gavairon, notre cabinet s'est exclusivement dédié à l'accompagnement des victimes d'accidents de la vie. Nous comprenons que derrière chaque dossier se trouve une vie bouleversée."}
              </p>
              <p>
                {"Notre approche repose sur une double compétence : juridique et technique. Nous collaborons avec des médecins conseils indépendants pour évaluer au plus juste l'étendue de vos préjudices."}
              </p>
            </div>
          </div>

          {/* Image Component with Next.js Optimization */}
          <div className="relative h-[450px] bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-lg">
             {/* When you have a real image, use:
                <Image src="/attorney.jpg" alt="Portrait Maître Dupont" fill className="object-cover" /> 
             */}
             <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                {"[Photo de Maître Dupont]"}
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-white shadow-sm rounded border-t-4 border-legal-gold hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-4 text-legal-900 uppercase">{"Indépendance"}</h3>
              <p className="text-slate-600">
                {"Aucun lien avec les compagnies d'assurance. Nous servons exclusivement les intérêts des victimes."}
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-white shadow-sm rounded border-t-4 border-legal-gold">
              <h3 className="font-bold text-xl mb-4 text-legal-900 uppercase">Transparence</h3>
              <p className="text-slate-600">{"Une convention d'honoraires claire dès le premier rendez-vous, basée sur les résultats obtenus."}</p>
            </div>
            {/* Value 3 */}
            <div className="p-8 bg-white shadow-sm rounded border-t-4 border-legal-gold">
              <h3 className="font-bold text-xl mb-4 text-legal-900 uppercase">Proximité</h3>
              <p className="text-slate-600">Un interlocuteur unique dédié à votre dossier pour un suivi personnalisé et réactif.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

