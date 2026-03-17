import type { HeaderProps } from '../types';

export default function Header({ cartCount, title, children }: HeaderProps) {
  return (
    <header className='mb-12 relative'>
      <div className='sticky top-4 z-50 bg-white/80 backdrop-blur-md border border-stone-200/60 rounded-full px-6 py-4 shadow-sm max-w-[1100px] mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative flex items-center justify-center h-10 w-10 btn-accent bg-[#E2725B] text-white font-black text-xl rounded-full shadow-md scale-110 -translate-x-2 border-2 border-white cursor-pointer hover:rotate-12 transition-transform duration-300'>
            S
          </div>
          <span className='font-bold text-lg tracking-tight text-stone-800 cursor-pointer hover:text-[#E2725B] transition-colors'>
            {title}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <div
            className='relative cursor-pointer p-2.5 rounded-full transition-all duration-200 hover:bg-stone-50 bg-white shadow-sm border border-stone-100 group'
            title={`${cartCount} items in cart`}
          >
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
              className='text-stone-700 group-hover:text-[#E2725B] transition-colors'
            >
              <path d='M6 6h15l-1.5 9H7.5L6 6z' />
              <path d='M6 6H4M9 18h6' />
              <circle cx='9' cy='20' r='1' />
              <circle cx='15' cy='20' r='1' />
            </svg>
            {cartCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold min-w-[1.25rem] h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm'>
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className='text-center mt-12 mb-6'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tightest mb-4'>
          <span className='bg-gradient-to-r from-stone-800 to-stone-500 bg-clip-text text-transparent'>
            Discover
          </span>{' '}
          <span className='italic font-light text-[#E2725B]'>your style</span>
        </h1>
        <div className='mt-8 space-y-4'>{children}</div>
      </div>
    </header>
  );
}

