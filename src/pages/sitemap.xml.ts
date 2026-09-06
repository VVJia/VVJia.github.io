import { getCollection } from 'astro:content';
function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export async function GET(context) {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const base = (context.site ?? 'https://vvjia.github.io').toString();
  const paths = ['/', '/publications/', '/writing/', ...posts.map((post) => '/writing/' + post.id + '/')];
  const urls = paths.map((path) => '<url><loc>' + escapeXml(new URL(path, base).toString()) + '</loc></url>').join('');
  const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
