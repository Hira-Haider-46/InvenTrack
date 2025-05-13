import { Link } from "react-router-dom";
import dashboard from "../assets/dashboard.png";

function Sidebar({ show }) {
  return (
    <aside
      className={`bg-[#1565C0] text-white fixed top-0 left-0 h-full z-20 transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "-translate-x-full"
      } w-[5%] min-w-[60px] flex flex-col items-center pt-5`}
    >
      <Link to="/">
        <img
          src={dashboard}
          alt="dashboard"
          className="w-10 h-auto cursor-pointer"
        />
      </Link>
    </aside>
  );
}

export default Sidebar;