import type { PaginationProps } from '../../index';

export const Pagination = ({ page, totalItems, limit, onNext, onPrev }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div className="pagination">
      <div className='pagination__content'>
        <button onClick={onPrev} disabled={page === 1} className='pagination__prev'>
          Prev
        </button>
        
        <span className='pagination__current'>( Page {page} of {totalPages} )</span>

        <button onClick={onNext} disabled={page >= totalPages} className='pagination__next'>
          Next
        </button>
      </div>
    </div>
  );
};