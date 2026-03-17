import type { SuggestionsProps } from '../types';

export default function Suggestions({
  suggestions,
  onSuggestionClick,
  loading,
}: SuggestionsProps) {
  return (
    <div className='flex justify-center gap-2 mt-4 flex-wrap max-w-[500px] mx-auto'>
      <span className='text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center mr-1'>
        Popular:
      </span>
      {suggestions.map((term) => (
        <button
          key={term}
          className='bg-white text-stone-700 border border-stone-200/60 px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer shadow-sm transition-all duration-300 hover:bg-[#E2725B] hover:text-white hover:border-[#E2725B] hover:-translate-y-0.5 hover:shadow-md'
          onClick={() => onSuggestionClick(term)}
          disabled={loading}
        >
          {term}
        </button>
      ))}
    </div>
  );
}

