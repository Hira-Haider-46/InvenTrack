import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-white px-8 py-4">
      <HiMenu
        className="text-3xl text-gray-500 cursor-pointer"
        onClick={toggleSidebar}
      />
      <button className="bg-[#1565C0] text-white px-5 py-1.5 rounded-3xl hover:bg-white hover:text-[#1565C0] border border-[#1565C0] transition cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;