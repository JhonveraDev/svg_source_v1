import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface EmptyStateProps {
  title: string;
  desc: string;
  icon: ReactNode;
}

export const EmptyState = ({ title, desc, icon }: EmptyStateProps) => (
  <div className="empty-state">
    <span>
      {icon}
    </span>
    <h2>{title}</h2>
    <p>{desc}</p>
    <Link to="/" className="empty-state__back-to-home">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
      <p>Browse SVGs</p>
    </Link>
  </div>
);