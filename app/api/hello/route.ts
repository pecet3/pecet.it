// import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET() {
  const responseText = "Hello World";

  return new Response(responseText);
}
