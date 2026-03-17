import type { FormEvent, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  thumbnailImageUrl: string;
  price: string;
  msrp?: string;
}

export interface PaginationData {
  totalResults: number;
  begin: number;
  end: number;
  currentPage: number;
  totalPages: number;
  previousPage?: number | null;
  nextPage?: number | null;
}

export interface PaginationProps {
  pagination: PaginationData | null;
  onPageChange: (newPage: number) => void;
}

export interface HeaderProps {
  cartCount: number;
  title: string;
  children?: ReactNode;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: (e: FormEvent) => void;
  loading: boolean;
}

export interface SuggestionsProps {
  suggestions: readonly string[];
  onSuggestionClick: (term: string) => void;
  loading: boolean;
}
