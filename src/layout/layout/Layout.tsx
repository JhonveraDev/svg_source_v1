import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "../index";

export function Layout() {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <main className="layout__main">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}