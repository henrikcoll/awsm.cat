import {customAlphabet} from 'nanoid';
import { getDb } from '@/lib/surreal';

const nanoid = customAlphabet('useandomTPXpxJACKVERYMNDBUSHWOFGQZbfghjkqvwyzrct', 5);

export async function POST(request: Request) {
	const body = await request.json();
	const id = `${nanoid(5)}`;

	const db = await getDb();

	await db.create('document', { id, content: body.content });

	const baseUrl = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;

	return new Response(JSON.stringify({ code: id, url: `${baseUrl}/${id}` }), {
		headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
	});
}

export const dynamic = 'force-dynamic';