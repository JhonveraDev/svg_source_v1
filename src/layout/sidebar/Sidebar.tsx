import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../index";
import { useSvgCategories } from "../../shared";

export const Sidebar = () => {
  const { categories, loading, error } = useSvgCategories();

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

      <nav className="sidebar__nav sidebar__nav--categories">
        <ul className="sidebar__list">
          {loading && <li className="sidebar__item">Cargando...</li>}
          {error && <li className="sidebar__item">Error: {error}</li>}
          {categories.map(({ category, total }) => (
            <li key={category} className="sidebar__item">
              <NavLink
                to={`/category/${category}`}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                }
              >
                <span className="sidebar__text sidebar__text--category">{category} {total}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};