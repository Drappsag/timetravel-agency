export type Destination = {
	slug: "paris-1889" | "cretace-65m" | "florence-1504";
	title: string;
	subtitle: string;
	eraLabel: string;
	image: string; // /images/...
	highlights: string[];
	risks: string[];
	recommendedFor: string[];
	startingPriceEUR: number;
	durationSuggestedDays: number;
};

export const DESTINATIONS: Destination[] = [
	{
		slug: "paris-1889",
		title: "Paris 1889",
		subtitle: "Belle Époque, Exposition Universelle, naissance d’un mythe.",
		eraLabel: "XIXe siècle",
		image: "/images/paris-1889.png",
		highlights: [
			"Accès VIP à l’Exposition Universelle",
			"Soirée privée proche de la Tour Eiffel (inauguration)",
			"Visites guidées : ateliers, cafés, boulevards",
		],
		risks: [
			"Chocs culturels (étiquette sociale stricte)",
			"Hygiène et médecine pré-antibiotiques",
		],
		recommendedFor: ["Histoire", "Architecture", "Vie urbaine", "Élégance"],
		startingPriceEUR: 14900,
		durationSuggestedDays: 4,
	},
	{
		slug: "cretace-65m",
		title: "Crétacé (-65M)",
		subtitle: "Nature brute, géants vivants, expédition ultra-encadrée.",
		eraLabel: "Temps anciens",
		image: "/images/cretace.png",
		highlights: [
			"Safari paléo-écologique avec dômes d’observation",
			"Briefing survie & protocole “silence total”",
			"Nuits en camp sécurisé (blindage + périmètre)",
		],
		risks: [
			"Danger faune (prédateurs, stampedes)",
			"Climat et allergènes inconnus",
			"Mission soumise à validation médicale",
		],
		recommendedFor: ["Aventure", "Nature", "Adrénaline", "Photographie"],
		startingPriceEUR: 21900,
		durationSuggestedDays: 3,
	},
	{
		slug: "florence-1504",
		title: "Florence 1504",
		subtitle: "Renaissance, chefs-d’œuvre, mécènes et ateliers d’art.",
		eraLabel: "Renaissance",
		image: "/images/florence-1504.png",
		highlights: [
			"Atelier d’artiste (techniques & pigments)",
			"Parcours architecture & places emblématiques",
			"Rencontres “curatées” (réseau de mécènes)",
		],
		risks: [
			"Étiquette sociale, politique locale instable",
			"Précautions sanitaires (voyage encadré)",
		],
		recommendedFor: ["Art", "Culture", "Architecture", "Gastronomie"],
		startingPriceEUR: 16900,
		durationSuggestedDays: 5,
	},
];

export function getDestination(slug: string) {
	return DESTINATIONS.find((d) => d.slug === slug);
}
