import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import QuizSection from "@/components/QuizSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Section from "@/components/Section";

export default function HomePage() {
	return (
		<main>
			<Header />
			<Hero />

			<Section
				title="L’agence"
				subtitle="Une expérience immersive, encadrée, et sur-mesure."
			>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<p className="text-sm font-semibold">Immersion</p>
						<p className="mt-2 text-sm text-zinc-300">
							Décors, itinéraires et codes sociaux adaptés à
							l’époque.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<p className="text-sm font-semibold">Sécurité</p>
						<p className="mt-2 text-sm text-zinc-300">
							Protocoles stricts, briefings, et zones encadrées.
						</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<p className="text-sm font-semibold">Conciergerie IA</p>
						<p className="mt-2 text-sm text-zinc-300">
							Un agent conversationnel pour choisir, planifier, et
							affiner.
						</p>
					</div>
				</div>
			</Section>

			<DestinationsSection />
			<QuizSection />
			<BookingSection />

			<Footer />
			<ChatWidget />
		</main>
	);
}
