import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { sortPosts } from '../utils/writing';

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export async function GET(context) {
  const posts = sortPosts(await getCollection('writing', ({ data }) => !data.draft));
  const items = posts.map((post) => {
    const url = new URL('/writing/' + post.id + '/', context.site ?? 'https://vvjia.github.io');
    return [
      '<item><title>', escapeXml(post.data.title), '</title><link>', url.toString(),
      '</link><guid>', url.toString(), '</guid><pubDate>', post.data.pubDate.toUTCString(),
      '</pubDate><description>', escapeXml(post.data.description ?? ''), '</description></item>',
    ].join('');
  }).join('');
  const base = (context.site ?? 'https://vvjia.github.io').toString();
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>',
    escapeXml(site.name), ' · Writing</title><link>', base,
    '</link><description>Research notes and personal essays by ', escapeXml(site.name),
    '.</description>', items, '</channel></rss>',
  ].join('');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
