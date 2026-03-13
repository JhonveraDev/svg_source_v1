export const Toolbar = () => {

  return (
    <div className="toolbar">
      <input className="toolbar__search"
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="toolbar__search-icon lucide-icon lucide lucide-search pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 transition-colors text-neutral-400 dark:text-neutral-500">
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
    </div>
  );
};