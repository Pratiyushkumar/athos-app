import { useState } from 'react';
import type { Product, PaginationData } from '../types';
import { API_BASE_URL, DEFAULT_SITE_ID } from '../constants';

export const useSearch = (siteId: string = DEFAULT_SITE_ID) => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const fetchResults = async (searchQuery: string, page: number) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    const url = `${API_BASE_URL}?siteId=${siteId}&q=${searchQuery}&resultsFormat=native&page=${page}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} failed to fetch results`);
      }
      const data = await response.json();

      setSearchResults(data.results || []);
      setPagination(data.pagination || null);
      setHasSearched(true);
    } catch (err: unknown) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    searchResults,
    pagination,
    loading,
    error,
    hasSearched,
    fetchResults,
  };
};
