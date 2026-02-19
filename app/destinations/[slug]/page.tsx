import Link from "next/link";
import { getDestination } from "@/data/destinations";

export default async function DestinationPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const d = getDestination(slug);

	if (!d) {
		return (
			<main className="mx-auto w-full max-w-4xl px-5 py-16">
				<p>Destination introuvable.</p>
				<Link className="text-gold-200" href="/">
					← Retour
				</Link>
			</main>
		);
	}

	return (
		<main>
			<div className="mx-auto w-full max-w-6xl px-5 py-12">
				<Link
					className="text-sm text-gold-200 hover:text-gold-50"
					href="/"
				>
					← Retour
				</Link>

				<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={d.image}
							alt={d.title}
							className="h-full w-full object-cover"
						/>
					</div>

					<div>
						<p className="text-xs text-gold-200">{d.eraLabel}</p>
						<h1 className="mt-2 text-3xl font-semibold tracking-tight">
							{d.title}
						</h1>
						<p className="mt-4 text-zinc-300">{d.subtitle}</p>

						<div className="mt-6 grid grid-cols-2 gap-3 text-sm">
							<div className="rounded-xl border border-white/10 bg-white/5 p-4">
								<div className="text-zinc-300">
									Durée suggérée
								</div>
								<div className="mt-1 font-semibold">
									{d.durationSuggestedDays} jours
								</div>
							</div>
							<div className="rounded-xl border border-white/10 bg-white/5 p-4">
								<div className="text-zinc-300">
									Prix plancher
								</div>
								<div className="mt-1 font-semibold text-gold-200">
									{d.startingPriceEUR}€
								</div>
							</div>
						</div>

						<a
							href="/#booking"
							className="mt-6 inline-flex rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-gold-400"
						>
							Réserver cette destination
						</a>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<h2 className="text-lg font-semibold">
							Incontournables
						</h2>
						<ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
							{d.highlights.map((h) => (
								<li key={h}>{h}</li>
							))}
						</ul>
					</div>

					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<h2 className="text-lg font-semibold">Risques</h2>
						<ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
							{d.risks.map((r) => (
								<li key={r}>{r}</li>
							))}
						</ul>
					</div>

					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<h2 className="text-lg font-semibold">Idéal pour</h2>
						<div className="mt-3 flex flex-wrap gap-2">
							{d.recommendedFor.map((t) => (
								<span
									key={t}
									className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs"
								>
									{t}
								</span>
							))}
						</div>
						<p className="mt-4 text-sm text-zinc-300">
							Besoin d’aide ? Ouvre le chat et décris ton style de
							voyage.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
