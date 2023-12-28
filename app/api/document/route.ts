import {customAlphabet} from 'nanoid';
import { sql } from "@vercel/postgres";

const nanoid = customAlphabet('useandomTPXpxJACKVERYMNDBUSHWOFGQZbfghjkqvwyzrct', 5);

export async function POST(request: Request) {
	const body = await request.json();
	const id = `${nanoid(5)}-${nanoid(5)}`;

	await sql`INSERT INTO documents (id, content) VALUES (${id}, ${body.content})`;

	return new Response(JSON.stringify({ code: id }), {
		headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
	});
}

export const dynamic = 'force-dynamic';