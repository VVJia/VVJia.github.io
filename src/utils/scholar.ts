import rawData from '../data/scholar.json';

export type ScholarPublication = {
  title?: string;
  num_citations?: number | null;
};

export type ScholarData = {
  status: 'ok' | 'unavailable' | 'error';
  updatedAt: string | null;
  citedby: number | null;
  hindex: number | null;
  i10index: number | null;
  publications: Record<string, ScholarPublication>;
};

export const scholar = rawData as ScholarData;

export function formatStat(value: number | null | undefined) {
  return typeof value === 'number' ? value.toLocaleString('en-US') : '—';
}
