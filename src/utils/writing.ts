import type { CollectionEntry } from 'astro:content';

export function sortPosts(posts: CollectionEntry<'writing'>[]) {
  return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
