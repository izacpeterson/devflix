import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavDrawer({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="text-lg">
      {/* Drawer toggle button */}
      <button className=" text-white text-2xl" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Drawer container */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-zinc-900 z-40 transform transition-transform ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-800">
          <h1 className="text-lg font-bold text-white">Navigation</h1>
          <button className="text-white hover:text-gray-400" onClick={toggleDrawer}>
            Close
          </button>
        </div>

        {/* Drawer links */}
        <ul className="py-4">
          {links.map((link) => (
            <li key={link.label} className="px-4 py-2">
              <Link to={link.href} className="text-white hover:text-gray-400" onClick={toggleDrawer}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-black opacity-90 z-30`} onClick={toggleDrawer} />
    </div>
  );
}
