interface ToolbarProps {
  query: string;
  onSearch: (value: string) => void;
   label?: string;
}

export const Toolbar = ({ query, onSearch, label }: ToolbarProps) => {
  return (
    <div className="toolbar">
      <input
        className="toolbar__search"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={label ? `Search ${label}'s SVGs...` : "Search SVGs..."}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toolbar__search-icon lucide-icon lucide lucide-search pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 transition-colors text-neutral-400 dark:text-neutral-500">
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
      {query && (
        <button onClick={() => onSearch("")} className="toolbar__clear">✕</button>
      )}
    </div>
  );
};