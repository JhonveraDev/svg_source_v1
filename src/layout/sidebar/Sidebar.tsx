import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../index";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <svg name="SVGL Logo" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136c-8,24-56,72-80,80V184a48,48,0,0,1,48-48Z" opacity="0.2"></path><path d="M168,32H88A56.06,56.06,0,0,0,32,88v80a56.06,56.06,0,0,0,56,56h48a8.07,8.07,0,0,0,2.53-.41c26.23-8.75,76.31-58.83,85.06-85.06A8.07,8.07,0,0,0,224,136V88A56.06,56.06,0,0,0,168,32ZM48,168V88A40,40,0,0,1,88,48h80a40,40,0,0,1,40,40v40H184a56.06,56.06,0,0,0-56,56v24H88A40,40,0,0,1,48,168Zm96,35.14V184a40,40,0,0,1,40-40h19.14C191,163.5,163.5,191,144,203.14Z"></path></svg>
        <h2>svgl</h2>
      </div>
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