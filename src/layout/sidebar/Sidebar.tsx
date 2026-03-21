import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { sidebarLinks } from "../index";
import { useSvgCategories } from "../../shared";

export const Sidebar = () => {
  const { categories, loading, error } = useSvgCategories();
  const navRef = useRef<HTMLElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const handleScroll = () => {
      const threshold = 20;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
      setIsAtBottom(atBottom);
    };

    handleScroll();

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <div className="sidebar">
      <nav className="sidebar__nav sidebar__nav--links">
        <ul className="sidebar__list">
          {sidebarLinks.map(({ to, label, icon: Icon }) => (
            <li key={to} className="sidebar__item">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                }
              >
                <Icon />
                <span className="sidebar__text">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="sidebar__divider" />

      <div className="sidebar__nav-wrapper">
        <nav
          ref={navRef}
          className="sidebar__nav sidebar__nav--categories"
        >
          <ul className="sidebar__list sidebar__list--categories">
            {loading && <li className="sidebar__item">Cargando...</li>}
            {error && <li className="sidebar__item">Error: {error}</li>}
            {categories.map(({ category, total }) => (
              <li key={category} className="sidebar__item">
                <NavLink
                  to={`/category/${category}`}
                  className={({ isActive }) =>
                    `sidebar__link sidebar__link--category ${isActive ? "sidebar__link--active" : ""}`
                  }
                >
                  <div className="sidebar__text sidebar__text--category">
                    <p className="sidebar__text--category-name">{category}</p>
                    <span className="sidebar__text--total">{total}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`sidebar__fade ${isAtBottom ? "sidebar__fade--hidden" : ""}`} />
      </div>
    </div>
  );
};