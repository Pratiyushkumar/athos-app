import { useState } from 'react';
import Pagination from './components/Pagination';
import { useSearch } from './hooks/useSearch';
import type { Product } from './types';
import { SUGGESTIONS } from './constants';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Suggestions from './components/Suggestions';
import ProductCard from './components/ProductCard';

function App() {
  const [query, setQuery] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);
  const {
    searchResults,
    pagination,
    loading,
    error,
    hasSearched,
    fetchResults,
  } = useSearch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetchResults(query, 1);
  };

  const handleSuggestionClick = (term: string) => {
    setQuery(term);
    fetchResults(term, 1);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const handlePageChange = (newPage: number) => {
    if (pagination && newPage >= 1 && newPage <= pagination.totalPages) {
      fetchResults(query, newPage);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto px-4 py-8'>
      <Header cartCount={cart.length} title='Product Search'>
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <Suggestions
          suggestions={SUGGESTIONS}
          onSuggestionClick={handleSuggestionClick}
          loading={loading}
        />
      </Header>

      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      {loading && (
        <div className='text-center py-12 text-stone-600 text-lg mt-8'>
          <div className='border-4 border-stone-100 w-10 h-10 rounded-full border-t-[#E2725B] animate-spin mx-auto mb-4'></div>
          Searching for "{query}"...
        </div>
      )}

      {error && (
        <div className='text-center py-12 text-red-500 text-lg'>{error}</div>
      )}

      {!loading && !error && hasSearched && searchResults.length === 0 && (
        <div className='text-center py-12 text-stone-600 text-lg'>
          No results found for "{query}"
        </div>
      )}

      {!loading && !error && !hasSearched && (
        <div className='text-center py-12 text-stone-500 text-lg font-medium'>
          Start by typing something in the search bar.
        </div>
      )}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 mt-12'>

        {!loading &&
          searchResults.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
      </div>

      {!loading && (
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      )}
    </div>
  );
}

export default App;
