export default function Section(props: {
	id?: string;
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}) {
	return (
		<section id={props.id} className="mx-auto w-full max-w-6xl px-5 py-16">
			<div className="mb-8">
				<h2 className="text-2xl font-semibold tracking-tight">
					{props.title}
				</h2>
				{props.subtitle ? (
					<p className="mt-2 text-zinc-300">{props.subtitle}</p>
				) : null}
			</div>
			{props.children}
		</section>
	);
}
