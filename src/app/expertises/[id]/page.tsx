import { EXPERTISES } from "@/constants/content";
import { notFound } from "next/navigation";

/**
 * Interface for the dynamic route parameters
 */
interface PageParams {
  params: Promise<{ id: string }>;
}

/**
 * Dynamic page for a specific legal practice area.
 * In Next.js 15/16, 'params' is a Promise and must be awaited.
 */
export default async function ExpertisePage({ params }: PageParams) {
  // Await the params to get the 'id' from the URL
  const { id } = await params;

  // Search for the matching expertise in our constant array
  const expertise = EXPERTISES.find((item) => item.id === id);

  // If no match is found, trigger the built-in 404 page
  if (!expertise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header section with a subtle background */}
      <section className="bg-zinc-50 py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-legal-900 mb-6 uppercase tracking-tight">
            {expertise.title}
          </h1>
          <div className="w-20 h-1 bg-legal-gold" />
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate lg:prose-xl">
          <p className="text-xl text-zinc-600 leading-relaxed italic mb-8">
            {expertise.description}
          </p>
          
          <div className="text-zinc-800 space-y-6">
            <p>
              Our firm provides comprehensive legal support in {expertise.title}. 
              We combine deep legal knowledge with a strategic approach to protect your interests.
            </p>
            {/* You can add more placeholder text or detailed sub-sections here */}
          </div>
        </div>
      </section>
    </main>
  );
}