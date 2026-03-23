interface PaginationProps {
  page: number;
  totalItems: number;
  limit: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination = ({ page, totalItems, limit, onNext, onPrev }: PaginationProps) => (
  <div className="pagination">
    <button onClick={onPrev} disabled={page === 1}>
      Prev
    </button>
    <span>Page {page}</span>
    <button onClick={onNext} disabled={page * limit >= totalItems}>
      Next
    </button>
  </div>
);