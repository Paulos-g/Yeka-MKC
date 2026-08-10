import { Link } from "react-router-dom";
import MKC from "../assets/MKC logo.jpg";

function Nav() {
  return (
    <nav className="bg-white/20  flex items-center justify-around h-16 rounded-xs shadow-black z-50 sticky top-0 shadow-md  backdrop-blur-md">
      <div className="flex">
        <img
          src={MKC}
          alt="MKC Logo"
          className="w-14 h-14 object-contain rounded-full"
        />
        <h2 className="mt-4 ml-1 text-2xl font-cormorant font-bold text-blue-400">
          Yeka Meserete Kirstos
        </h2>
      </div>

      <ul className=" flex items-center gap-20">
        <li>
          <Link className="text-lg" to="">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-lg" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="text-lg" to="/">
            Services
          </Link>
        </li>
        <li>
          <Link className="text-lg" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
