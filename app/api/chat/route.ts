import { NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";
import { buildSystemPrompt } from "@/lib/chatPrompt";

type ChatMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
	try {
		const body = (await req.json()) as { messages?: ChatMsg[] };

		if (!body.messages || !Array.isArray(body.messages)) {
			return NextResponse.json({ error: "Bad request" }, { status: 400 });
		}

		const apiKey = process.env.MISTRAL_API_KEY;
		if (!apiKey) {
			return NextResponse.json(
				{ error: "Missing MISTRAL_API_KEY on server" },
				{ status: 500 },
			);
		}

		const mistral = new Mistral({ apiKey });

		const system = buildSystemPrompt();

		const result = await mistral.chat.complete({
			model: "mistral-small-latest",
			messages: [{ role: "system", content: system }, ...body.messages],
			temperature: 0.7,
			maxTokens: 500,
		});

		const content = result?.choices?.[0]?.message?.content ?? "";
		return NextResponse.json({ content });
	} catch {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
