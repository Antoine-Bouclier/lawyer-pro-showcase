import Image from "next/image";
import { EXPERTISES } from "@/constants/content";
import ExpertiseCard from "@/components/ui/ExpertiseCard";
import Hero from "@/components/sections/Hero";

/**
 * Main Home Page
 * We use the 'mapping' logic to render the list of services defined in constants.
 */
export default function Home() {
	return (
		<main className="min-h-screen bg-white">
		{/* 1. Hero Section: The first thing users see */}
		<Hero />

		{/* 2. Practice Areas Section: The core of the law firm's services */}
		<section className="py-24 px-6 bg-zinc-50">
			<div className="max-w-7xl mx-auto">
			{/* Section Header */}
			<div className="text-center mb-16">
				<h2 className="text-4xl font-serif font-bold text-legal-900 mb-4 italic">
				Our Practice Areas
				</h2>
				<div className="w-24 h-1 bg-legal-gold mx-auto mb-6" />
				<p className="max-w-2xl mx-auto text-lg text-zinc-600">
				Expert legal counsel focused on delivering results and protecting your interests.
				</p>
			</div>

			{/* Grid of Expertise Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{EXPERTISES.map((item) => (
					<ExpertiseCard 
						key={item.id}
						id={item.id} // Pass the id here
						title={item.title} 
						description={item.description} 
						Icon={item.icon} 
					/>
				))}
			</div>
			</div>
		</section>

		{/* 3. About / CTA Section (Quick example) */}
		<section className="py-20 px-6 text-center bg-legal-900 text-white">
			<h2 className="text-3xl font-serif mb-6">Need legal advice?</h2>
			<button className="bg-legal-gold hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-sm transition-colors">
			Contact our office
			</button>
		</section>
		</main>
	);
	}