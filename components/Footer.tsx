export default function Footer() {
	return (
		<footer className="border-t border-white/10">
			<div className="mx-auto w-full max-w-6xl px-5 py-10 text-sm text-zinc-400">
				<p>
					© {new Date().getFullYear()} TimeTravel Agency — Projet
					pédagogique.
				</p>
			</div>
		</footer>
	);
}
