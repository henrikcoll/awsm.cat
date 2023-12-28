import {customAlphabet} from 'nanoid';
import { sql } from "@vercel/postgres";

export async function GET(request: Request, { params }: { params: { id: string } }) {
	const {rows} = await sql`SELECT content FROM documents WHERE id = ${params.id}`;

	if (rows.length == 0) {
		return new Response('Link not found', {
			status: 404,
		})
	}
	
	return new Response(JSON.stringify({ code: params.id, content: rows[0].content }))
}

export const dynamic = 'force-dynamic';