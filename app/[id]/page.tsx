"use client"

import * as React from 'react';
import { Editor } from '@/components/editor';
import { useParams } from 'next/navigation'

export default function Home() {
	const [url, setUrl] = React.useState("");
	const [content, setContent] = React.useState("");

	const params = useParams<{ id: string }>()

	React.useEffect(() => {
		fetch(`/api/document/${params.id}`).then(async (response) => {
			const body = await response.json();
			setUrl(body.url)
			setContent(body.content)
		})
	}, [])

	return (
		<Editor props={{ url, setUrl, content, setContent }} />
	)
}
