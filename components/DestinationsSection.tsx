import Section from "@/components/Section";
import DestinationCard from "@/components/DestinationCard";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsSection() {
	return (
		<Section
			id="destinations"
			title="Destinations temporelles"
			subtitle="Choisis une époque, puis laisse l’agent IA affiner l’itinéraire selon tes préférences."
		>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{DESTINATIONS.map((d) => (
					<DestinationCard key={d.slug} d={d} />
				))}
			</div>
		</Section>
	);
}
