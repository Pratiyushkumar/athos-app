import React from 'react';
import type { PaginationProps } from '../types';
import { MAX_PAGE_TO_SHOW } from '../constants';

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  if (!pagination || pagination.totalPages <= 1) return null;

  const { currentPage, totalPages, previousPage, nextPage } = pagination;

  const pages: number[] = [];
  const maxPagesToShow = MAX_PAGE_TO_SHOW;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className='flex justify-center items-center gap-2 my-12 flex-wrap'>
      <button
        className='bg-white border border-stone-200/80 text-stone-700 px-4 py-2 rounded-full font-bold cursor-pointer transition-all duration-300 flex items-center gap-1 enabled:hover:bg-[#E2725B] enabled:hover:text-white enabled:hover:border-[#E2725B] disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold shadow-sm'
        disabled={!previousPage}
        onClick={() => previousPage && onPageChange(previousPage)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          className='transition-transform group-hover:-translate-x-0.5'
        >
          <path d='M19 12H5M12 19l-7-7 7-7' />
        </svg>
        Prev
      </button>

      <div className='flex gap-1.5'>
        {pages.map((p) => (
          <button
            key={p}
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full cursor-pointer font-bold transition-all duration-200 border text-sm sm:text-base ${
              p === currentPage
                ? 'bg-[#E2725B] text-white border-[#E2725B] shadow-md shadow-[#E2725B]/20'
                : 'bg-white hover:bg-stone-50 border-stone-200/80 text-stone-700 hover:border-stone-300'
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className='bg-white border border-stone-200/80 text-stone-700 px-4 py-2 rounded-full font-bold cursor-pointer transition-all duration-300 flex items-center gap-1 enabled:hover:bg-[#E2725B] enabled:hover:text-white enabled:hover:border-[#E2725B] disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold shadow-sm'
        disabled={!nextPage}
        onClick={() => nextPage && onPageChange(nextPage)}
      >
        Next
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          className='transition-transform group-hover:translate-x-0.5'
        >
          <path d='M5 12h14M12 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

