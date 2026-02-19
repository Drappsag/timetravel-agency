"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Section from "@/components/Section";
import { DESTINATIONS } from "@/data/destinations";
import { bookingSchema, type BookingInput } from "@/lib/validators";

export default function BookingSection() {
	const [serverMsg, setServerMsg] = useState<string | null>(null);

	const form = useForm<BookingInput>({
		resolver: zodResolver(bookingSchema),
		defaultValues: {
			destination: "paris-1889",
			startDate: "",
			endDate: "",
			travelers: 2,
			notes: "",
		},
	});

	async function onSubmit(values: BookingInput) {
		// Ici: tu peux brancher un backend, ou juste simuler une validation.
		setServerMsg(
			`Pré-réservation enregistrée (simulation). Destination: ${values.destination}, voyageurs: ${values.travelers}.`,
		);
	}

	return (
		<Section
			id="booking"
			title="Réserver & planifier"
			subtitle="Formulaire simple avec validation (dates, nombre de voyageurs)."
		>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2"
			>
				<label className="text-sm">
					Destination
					<select
						className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2"
						{...form.register("destination")}
					>
						{DESTINATIONS.map((d) => (
							<option key={d.slug} value={d.slug}>
								{d.title}
							</option>
						))}
					</select>
					{form.formState.errors.destination ? (
						<p className="mt-1 text-xs text-red-300">
							{form.formState.errors.destination.message}
						</p>
					) : null}
				</label>

				<label className="text-sm">
					Voyageurs (1–6)
					<input
						type="number"
						className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2"
						{...form.register("travelers")}
					/>
					{form.formState.errors.travelers ? (
						<p className="mt-1 text-xs text-red-300">
							{form.formState.errors.travelers.message}
						</p>
					) : null}
				</label>

				<label className="text-sm">
					Date de début
					<input
						type="date"
						className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2"
						{...form.register("startDate")}
					/>
					{form.formState.errors.startDate ? (
						<p className="mt-1 text-xs text-red-300">
							{form.formState.errors.startDate.message}
						</p>
					) : null}
				</label>

				<label className="text-sm">
					Date de fin
					<input
						type="date"
						className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2"
						{...form.register("endDate")}
					/>
					{form.formState.errors.endDate ? (
						<p className="mt-1 text-xs text-red-300">
							{form.formState.errors.endDate.message}
						</p>
					) : null}
				</label>

				<label className="text-sm md:col-span-2">
					Notes (optionnel)
					<textarea
						className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2"
						rows={4}
						{...form.register("notes")}
					/>
				</label>

				<div className="md:col-span-2 flex flex-wrap items-center gap-3">
					<button
						type="submit"
						className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-gold-400"
					>
						Valider la pré-réservation
					</button>
					{serverMsg ? (
						<p className="text-sm text-zinc-200">{serverMsg}</p>
					) : null}
				</div>
			</form>
		</Section>
	);
}
