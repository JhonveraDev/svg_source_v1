import { useScrollBottom } from "../../index";
import type { SvgContentProps } from "../../types"

export const SvgContent = ({ count, label, children, emptyMessage }: SvgContentProps) => {
  const { ref: gridRef, isAtBottom } = useScrollBottom(count);

  return (
    <div className="svg__content">
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="svg__grid"
      >
        <div className="svg__data">{count} {label}</div>
        {count === 0 && emptyMessage
          ? <p>{emptyMessage}</p>
          : <>{children}</>
        }
      </div>
      <div className={`container__fade ${isAtBottom ? "container__fade--hidden" : ""}`} />
    </div>
  );
};
