"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Destination } from "@/data/destinations";

export default function DestinationCard({ d }: { d: Destination }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.2 }}
			className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
		>
			<div className="aspect-[16/10] overflow-hidden bg-zinc-900">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={d.image}
					alt={d.title}
					className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]"
					loading="lazy"
				/>
			</div>

			<div className="p-5">
				<div className="flex items-start justify-between gap-4">
					<div>
						<p className="text-xs text-gold-200">{d.eraLabel}</p>
						<h3 className="mt-1 text-lg font-semibold">
							{d.title}
						</h3>
						<p className="mt-2 text-sm text-zinc-300">
							{d.subtitle}
						</p>
					</div>
					<div className="text-right text-sm">
						<div className="text-zinc-300">Dès</div>
						<div className="font-semibold text-gold-200">
							{d.startingPriceEUR}€
						</div>
					</div>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{d.recommendedFor.slice(0, 3).map((t) => (
						<span
							key={t}
							className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
						>
							{t}
						</span>
					))}
				</div>

				<div className="mt-5 flex items-center justify-between">
					<Link
						href={`/destinations/${d.slug}`}
						className="text-sm font-semibold text-white hover:text-gold-200"
					>
						Voir le détail →
					</Link>
					<a
						href="#booking"
						className="rounded-xl bg-gold-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-gold-400"
					>
						Réserver
					</a>
				</div>
			</div>
		</motion.div>
	);
}
