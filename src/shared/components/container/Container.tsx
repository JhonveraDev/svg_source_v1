import type { SvgContentProps } from "../../types"

export const SvgContent = ({ count, label, children, emptyMessage }: SvgContentProps) => {
  return (
    <div className="svg__content">
      <div className="svg__data">{count} {label}</div>
      <div className="svg__grid">
        {count === 0 && emptyMessage
          ? <p>{emptyMessage}</p>
          : <>{children}</>
        }
      </div>
    </div>
  );
};
