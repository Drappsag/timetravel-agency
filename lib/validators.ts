import { z } from "zod";
import { DESTINATIONS } from "@/data/destinations";

export const bookingSchema = z
	.object({
		destination: z.enum(
			DESTINATIONS.map((d) => d.slug) as [string, ...string[]],
		),
		startDate: z.string().min(1),
		endDate: z.string().min(1),
		travelers: z.number().int().min(1).max(6),
		notes: z.string().max(400).optional(),
	})
	.refine((v) => new Date(v.endDate) > new Date(v.startDate), {
		message: "La date de fin doit être après la date de début",
		path: ["endDate"],
	});

export type BookingInput = z.infer<typeof bookingSchema>;
