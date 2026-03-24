import { useScrollBottom } from "../../index";
import type { SvgContentProps } from "../../types"

export const SvgContent = ({ count, label, children, emptyMessage }: SvgContentProps) => {
  const { ref: gridRef, isAtBottom } = useScrollBottom(count);

  return (
    <div className="svg__content">
      <div className="svg__data">{count} {label}</div>
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
