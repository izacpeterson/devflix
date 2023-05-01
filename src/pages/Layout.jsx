import { Outlet, Link } from "react-router-dom";
import NavDrawer from "../components/NavDrawer";

export default function Layout() {
  return (
    <div>
      <header className="bg-primary">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-16">
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
