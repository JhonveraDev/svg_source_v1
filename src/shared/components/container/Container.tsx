import { useScrollBottom } from "../../index";
import type { SvgContentProps } from "../../types"

export const SvgContent = ({ count, label, children, emptyMessage }: SvgContentProps) => {
  const { ref: gridRef, isAtBottom } = useScrollBottom(count);

  return (
    <div className="svg__content">
      <div className="svg__data">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide-icon lucide lucide-files"
        >
          <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
          <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path>
          <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path>
        </svg>
        <div className="svg__data--label">
          {label} - {count}
        </div>
      </div>
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="svg__grid"
      >
        {count === 0 && emptyMessage
          ? <>{emptyMessage}</>
          : <>{children}</>
        }
      </div>
      <div className={`container__fade ${isAtBottom ? "container__fade--hidden" : ""}`} />
    </div>
  );
};
