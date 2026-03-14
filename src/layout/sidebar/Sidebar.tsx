import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../index";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav sidebar__nav--links">
        <ul className="sidebar__list sidebar__list--links">
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

      {/* <nav className="sidebar__nav sidebar__nav--categories">
        <ul className="sidebar__list">
          {svgsData.map((link) => (
            <li key={link.id} className="sidebar__item">
              <NavLink
                to={`/category/${link.id}`}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                }
              >
                <span className="sidebar__text sidebar__text--category">{link.tec}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </div>
  );
};