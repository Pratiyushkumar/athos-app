import { useCallback, useRef, useState } from 'react';
import type { Product, PaginationData } from '../types';
import { API_BASE_URL, DEFAULT_SITE_ID } from '../constants';

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const cache = useRef<
    Map<string, { results: Product[]; pagination: PaginationData }>
  >(new Map());

  const fetchResults = useCallback(
    async (searchQuery: string, page: number) => {
      if (!searchQuery.trim()) return;

      const cacheKey = `${searchQuery}::${page}`;

      if (cache.current.has(cacheKey)) {
        const cached = cache.current.get(cacheKey)!;
        setSearchResults(cached.results);
        setPagination(cached.pagination);
        setHasSearched(true);
        return;
      }

      setLoading(true);
      setError(null);

      const url = `${API_BASE_URL}?siteId=${DEFAULT_SITE_ID}&q=${searchQuery}&resultsFormat=native&page=${page}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} failed to fetch results`);
        }
        const data = await response.json();

        setSearchResults(data.results || []);
        setPagination(data.pagination || null);
        setHasSearched(true);

        if (cache.current.size >= 50) {
          const firstKey = cache.current.keys().next().value;
          if (firstKey !== undefined) cache.current.delete(firstKey);
        }

        cache.current.set(cacheKey, {
          results: data.results ?? [],
          pagination: data.pagination ?? null,
        });
      } catch (err: unknown) {
        console.error(err);
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    searchResults,
    pagination,
    loading,
    error,
    hasSearched,
    fetchResults,
  };
};
