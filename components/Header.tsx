import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
				<Link href="/" className="font-semibold tracking-tight">
					TimeTravel Agency
				</Link>

				<nav className="flex items-center gap-4 text-sm text-zinc-200">
					<a className="hover:text-white" href="#destinations">
						Destinations
					</a>
					<a className="hover:text-white" href="#quiz">
						Quiz
					</a>
					<a className="hover:text-white" href="#booking">
						Réserver
					</a>
					<a className="hover:text-white" href="#chat">
						Chat
					</a>
				</nav>
			</div>
		</header>
	);
}
