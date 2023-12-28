"use client"

import * as React from 'react';
import { Editor } from '@/components/editor';

export default function Home() {
  const [url, setUrl] = React.useState("");
  const [value, setValue] = React.useState("");

  return (
    <Editor props={{ url, setUrl, content: value, setContent: setValue }} />
  )
}
