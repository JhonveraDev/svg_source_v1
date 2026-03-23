export interface PaginationProps {
  page: number;
  totalItems: number;
  limit: number;
  onNext: () => void;
  onPrev: () => void;
}
