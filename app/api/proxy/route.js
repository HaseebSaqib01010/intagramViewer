// app/api/proxy/route.js
import { NextResponse } from 'next/server';

export async function GETq(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
  }

  try {
    const response = await fetch(decodeURIComponent(url));

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch media' }, { status: response.status });
    }

    const contentType = response.headers.get('content-type');
    const stream = response.body;

    const res = new Response(stream, {
      headers: {
        'Content-Type': contentType,
      },
    });
    console.log('res: ',)
    return res;
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}
