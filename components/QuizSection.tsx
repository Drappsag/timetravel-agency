"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import { DESTINATIONS } from "@/data/destinations";

type Answers = {
	exp?: "culture" | "aventure" | "elegance";
	period?: "moderne" | "origines" | "renaissance";
	vibe?: "urbain" | "sauvage" | "art";
	activity?: "monuments" | "faune" | "musees";
};

function scoreDestination(a: Answers) {
	const scores: Record<string, number> = {
		"paris-1889": 0,
		"cretace-65m": 0,
		"florence-1504": 0,
	};

	if (a.exp === "culture") {
		scores["florence-1504"] += 2;
		scores["paris-1889"] += 1;
	}
	if (a.exp === "aventure") {
		scores["cretace-65m"] += 3;
	}
	if (a.exp === "elegance") {
		scores["paris-1889"] += 2;
		scores["florence-1504"] += 1;
	}

	if (a.period === "moderne") scores["paris-1889"] += 2;
	if (a.period === "origines") scores["cretace-65m"] += 2;
	if (a.period === "renaissance") scores["florence-1504"] += 2;

	if (a.vibe === "urbain") scores["paris-1889"] += 2;
	if (a.vibe === "sauvage") scores["cretace-65m"] += 2;
	if (a.vibe === "art") scores["florence-1504"] += 2;

	if (a.activity === "monuments") scores["paris-1889"] += 1;
	if (a.activity === "faune") scores["cretace-65m"] += 2;
	if (a.activity === "musees") scores["florence-1504"] += 2;

	const bestSlug = Object.entries(scores).sort((x, y) => y[1] - x[1])[0]?.[0];
	return DESTINATIONS.find((d) => d.slug === bestSlug);
}

export default function QuizSection() {
	const [a, setA] = useState<Answers>({});
	const reco = useMemo(() => scoreDestination(a), [a]);

	return (
		<Section
			id="quiz"
			title="Quiz — destination idéale"
			subtitle="4 questions, une recommandation immédiate (logique simple + cohérente)."
		>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
					<div>
						<p className="text-sm font-semibold">
							1) Quel type d’expérience ?
						</p>
						<div className="mt-2 flex flex-wrap gap-2">
							<button
								onClick={() =>
									setA((s) => ({ ...s, exp: "culture" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Culturelle et artistique
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, exp: "aventure" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Aventure et nature
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, exp: "elegance" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Élégance et raffinement
							</button>
						</div>
					</div>

					<div>
						<p className="text-sm font-semibold">
							2) Votre période préférée ?
						</p>
						<div className="mt-2 flex flex-wrap gap-2">
							<button
								onClick={() =>
									setA((s) => ({ ...s, period: "moderne" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								XIXe-XXe siècle
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, period: "origines" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Temps anciens
							</button>
							<button
								onClick={() =>
									setA((s) => ({
										...s,
										period: "renaissance",
									}))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Renaissance
							</button>
						</div>
					</div>

					<div>
						<p className="text-sm font-semibold">
							3) Vous préférez :
						</p>
						<div className="mt-2 flex flex-wrap gap-2">
							<button
								onClick={() =>
									setA((s) => ({ ...s, vibe: "urbain" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Effervescence urbaine
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, vibe: "sauvage" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Nature sauvage
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, vibe: "art" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Art & architecture
							</button>
						</div>
					</div>

					<div>
						<p className="text-sm font-semibold">
							4) Activité idéale :
						</p>
						<div className="mt-2 flex flex-wrap gap-2">
							<button
								onClick={() =>
									setA((s) => ({
										...s,
										activity: "monuments",
									}))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Visiter des monuments
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, activity: "faune" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Observer la faune
							</button>
							<button
								onClick={() =>
									setA((s) => ({ ...s, activity: "musees" }))
								}
								className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm hover:bg-white/10"
							>
								Explorer des musées
							</button>
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<p className="text-sm text-zinc-300">Recommandation</p>
					{reco ? (
						<>
							<h3 className="mt-2 text-2xl font-semibold">
								{reco.title}
							</h3>
							<p className="mt-3 text-zinc-200">
								{reco.subtitle}
							</p>
							<p className="mt-4 text-sm text-zinc-300">
								Conseil : ouvre le chat et dis “Je veux{" "}
								{reco.title}” + tes attentes (budget, style,
								contraintes).
							</p>
							<a
								href={`/destinations/${reco.slug}`}
								className="mt-6 inline-flex rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-gold-400"
							>
								Voir la page destination
							</a>
						</>
					) : (
						<p className="mt-3 text-zinc-200">
							Réponds à au moins 2 questions pour voir une reco.
						</p>
					)}
				</div>
			</div>
		</Section>
	);
}
