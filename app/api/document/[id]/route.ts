import {customAlphabet} from 'nanoid';
import { getDb } from '@/lib/surreal';



export async function GET(request: Request, { params }: { params: { id: string } }) {
	const db = await getDb();
	const rows = await db.select(`document:${params.id}`);

	if (rows.length == 0) {
		return new Response('Link not found', {
			status: 404,
		})
	}

	const baseUrl = process.env.BASE_URL || `https://${process.env.VERCEL_URL}`;
	
	return new Response(JSON.stringify({
		code: params.id,
		url: `${baseUrl}/${params.id}`,
		content: rows[0].content
	}))
}

export const dynamic = 'force-dynamic';