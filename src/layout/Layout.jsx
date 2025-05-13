import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar show={showSidebar} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          showSidebar ? "ml-[5%]" : "ml-0"
        }`}
      >
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <div className="flex-1 overflow-auto border-t border-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;