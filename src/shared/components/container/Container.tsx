import { useScrollBottom } from "../../index";
import type { SvgContentProps } from "../../types"

export const SvgContent = ({ count, label, children, emptyMessage, headerIcon, containerClass="svg__grid" }: SvgContentProps) => {
  const { ref: gridRef, isAtBottom } = useScrollBottom(count);

  return (
    <div className="svg__content">
      <div className="svg__data">
        {headerIcon}
        <div className="svg__data--label">
          {label} {count}
        </div>
      </div>
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={containerClass}
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
