import type { SearchBarProps } from '../types';

export default function SearchBar({
  query,
  setQuery,
  onSubmit,
  loading,
}: SearchBarProps) {
  return (
    <form
      className='flex flex-col sm:flex-row max-w-[640px] mx-auto gap-2 sm:gap-3 bg-white p-2 sm:p-2 rounded-2xl sm:rounded-full shadow-md border border-stone-200/80 focus-within:ring-4 focus-within:ring-[#E2725B]/10 focus-within:border-[#E2725B] transition-all duration-300'
      onSubmit={onSubmit}
    >
      <div className='flex items-center flex-1 px-4 sm:px-6 gap-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-stone-400'
        >
          <circle cx='11' cy='11' r='8' />
          <line x1='21' y1='21' x2='16.65' y2='16.65' />
        </svg>
        <input
          type='text'
          className='flex-1 border-none bg-transparent py-3 sm:py-3.5 text-base text-stone-800 outline-none placeholder:text-stone-400 w-full font-medium'
          placeholder='What are you looking for today?'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        type='submit'
        className='bg-[#E2725B] hover:bg-[#C55E4A] active:translate-y-0.5 text-white border-none px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto shadow-sm shadow-[#E2725B]/20'
        disabled={loading}
      >
        {loading ? (
          <div className='border-2 border-white/40 w-4 h-4 rounded-full border-l-white animate-spin'></div>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
}

