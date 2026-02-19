"use client";

import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0">
				<video
					className="h-full w-full object-cover opacity-40"
					autoPlay
					muted
					loop
					playsInline
					src="/hero.mp4"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/70 to-zinc-950" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl px-5 py-20">
				<motion.h1
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-4xl font-semibold tracking-tight md:text-6xl"
				>
					Voyage temporel, version luxe.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="mt-5 max-w-2xl text-zinc-200"
				>
					Trois destinations iconiques. Un agent IA pour vous guider.
					Une réservation simple, rapide, et cohérente.
				</motion.p>

				<div className="mt-8 flex flex-wrap gap-3">
					<a
						href="#destinations"
						className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-gold-400"
					>
						Explorer les destinations
					</a>
					<a
						href="#chat"
						className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
					>
						Parler à l’agent IA
					</a>
				</div>

				<div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm text-zinc-200 md:grid-cols-3">
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						Guidage personnalisé
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						Design dark premium
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-4">
						Réservation & planification
					</div>
				</div>
			</div>
		</section>
	);
}
