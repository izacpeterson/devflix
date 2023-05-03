import { Outlet, Link } from "react-router-dom";
import NavDrawer from "../components/NavDrawer";

export default function Layout() {
  return (
    <div>
      <header className="bg-primary">
        <div className="flex justify-between items-center py-4 px-6">
          <Link to="/" className="text-white text-3xl font-bold">
            DevFlix
          </Link>
          <NavDrawer
            links={[
              { href: "/", label: "Home" },
              { href: "/account", label: "Account" },
              { href: "/favorites", label: "Favorites" },
              { href: "/discover", label: "Discover" },
            ]}
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
