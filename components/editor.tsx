import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"

export function Editor({ props: { url, setUrl, content, setContent } }: { props: { url: string, setUrl: Function, content: string, setContent: Function } }) {
	const { toast } = useToast();

	const myTheme = createTheme({
		theme: 'light',
		settings: {
			background: 'hsl(var(--muted))',
			backgroundImage: '',
			foreground: '',
			gutterBackground: 'hsl(var(--muted))',
			gutterForeground: 'hsl(var(--muted-foreground))',
			gutterBorder: 'hsl(var(--muted))',
		},
		styles: [],
	});

	const onChange = React.useCallback((val: string) => {
		setContent(val);
	}, []);

	function copyUrl() {
		navigator.clipboard.writeText(url)
		toast({
			title: "Copied!",
			description: "Link copied to clipboard",
		})
	}

	async function publish() {
		const response = await fetch('/api/document', {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify({
				content: content
			}),
		});

		const body = await response.json();
		setUrl(body.url)
	}

	return (
		<div className='h-full'>
			<div className='flex items-center justify-center space-x-2'>
				{url ? (
					<Input type="url" placeholder="https://awsm.cat/...." readOnly value={url} onClick={() => copyUrl()} />
				) : (<div className='flex-grow'></div>)}
				<Button type="submit" onClick={() => publish()}>Publish</Button>
			</div>
			<div className='mb-4 mt-6 p-2 max-h-[650px] overflow-x-auto rounded-lg border bg-muted h-full'>
				<CodeMirror basicSetup={{ lineNumbers: false }} theme={myTheme} value={content} height='100%' className='h-full' extensions={[]} onChange={onChange} />
			</div>
		</div>
	)
}