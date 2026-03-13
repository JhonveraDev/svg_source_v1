import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "./index";

function Layout() {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <main className="layout__main">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;