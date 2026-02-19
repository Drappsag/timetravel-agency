"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<Msg[]>([
		{
			role: "assistant",
			content:
				"Bienvenue chez TimeTravel Agency. Dites-moi ce que vous aimez (art, aventure, élégance) et je vous recommande une époque.",
		},
	]);
	const [input, setInput] = useState("");
	const bottomRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, open]);

	async function send() {
		const text = input.trim();
		if (!text || loading) return;

		const next = [...messages, { role: "user", content: text } as Msg];
		setMessages(next);
		setInput("");
		setLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ messages: next }),
			});
			const data = await res.json();
			setMessages((m) => [
				...m,
				{
					role: "assistant",
					content: data.content ?? "Désolé, je n’ai pas compris.",
				},
			]);
		} catch {
			setMessages((m) => [
				...m,
				{
					role: "assistant",
					content: "Erreur réseau. Réessaie dans un instant.",
				},
			]);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div id="chat">
			<button
				onClick={() => setOpen((v) => !v)}
				className="fixed bottom-5 right-5 z-50 rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg hover:bg-gold-400"
				aria-label="Ouvrir le chat"
			>
				Chat IA
			</button>

			{open ? (
				<div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
					<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
						<div>
							<p className="text-sm font-semibold">
								Agent TimeTravel
							</p>
							<p className="text-xs text-zinc-400">
								Conseils & planning
							</p>
						</div>
						<button
							onClick={() => setOpen(false)}
							className="text-sm text-zinc-300 hover:text-white"
						>
							Fermer
						</button>
					</div>

					<div className="max-h-[50vh] space-y-3 overflow-auto px-4 py-4">
						{messages.map((m, i) => (
							<div
								key={i}
								className={
									m.role === "user"
										? "flex justify-end"
										: "flex justify-start"
								}
							>
								<div
									className={
										m.role === "user"
											? "max-w-[85%] rounded-2xl bg-gold-500 px-4 py-2 text-sm text-zinc-950"
											: "max-w-[85%] rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100"
									}
								>
									{m.content}
								</div>
							</div>
						))}
						{loading ? (
							<p className="text-xs text-zinc-400">
								L’agent rédige…
							</p>
						) : null}
						<div ref={bottomRef} />
					</div>

					<div className="flex gap-2 border-t border-white/10 p-3">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" ? send() : null
							}
							placeholder="Posez-moi vos questions sur les voyages temporels…"
							className="flex-1 rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-gold-200"
						/>
						<button
							onClick={send}
							className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
						>
							Envoyer
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}
