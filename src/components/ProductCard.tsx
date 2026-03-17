import type { ProductCardProps } from '../types';

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const checkMsrp = (price?: string, msrp?: string): boolean => {
    if (!msrp || !price) return false;
    const priceNum = parseFloat(price);
    const msrpNum = parseFloat(msrp);
    return !isNaN(priceNum) && !isNaN(msrpNum) && msrpNum > priceNum;
  };

  const hasDiscount = checkMsrp(product.price, product.msrp);

  return (
    <div
      className='group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/60 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-xl hover:border-stone-300'
      key={product.id}
    >
      <div className='w-full aspect-[3/4] overflow-hidden relative bg-stone-100'>
        <img
          src={product.thumbnailImageUrl}
          alt={product.name}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          loading='lazy'
        />
      </div>

      <div className='p-5 flex flex-col flex-grow'>
        <div
          className='text-base font-bold text-stone-800 mb-2 line-clamp-2 h-12 leading-snug group-hover:text-[#E2725B] transition-colors cursor-pointer'
          title={product.name}
        >
          {product.name}
        </div>

        <div className='mt-auto pt-4 flex items-center justify-between'>
          <div className='flex items-baseline gap-1.5'>
            <span className='text-lg font-black text-stone-900'>
              ${product.price}
            </span>
            {hasDiscount && (
              <span className='text-xs text-stone-400 line-through'>
                ${product.msrp}
              </span>
            )}
          </div>

          <button
            className='h-10 w-10 btn-accent bg-stone-900 hover:bg-[#E2725B] text-white rounded-full font-bold text-sm cursor-pointer transition-all duration-300 flex justify-center items-center shadow-lg shadow-stone-900/10 hover:shadow-[#E2725B]/20  active:translate-y-px'
            onClick={() => onAddToCart(product)}
            title='Add to cart'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='12' y1='5' x2='12' y2='19' />
              <line x1='5' y1='12' x2='19' y2='12' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

