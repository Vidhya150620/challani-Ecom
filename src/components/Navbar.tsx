import logo from "../assets/logos/logo.png";
import { CiHeart } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { GiPearlNecklace } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
import { GiEncirclement } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiEarrings } from "react-icons/gi";
import { IoIosOptions } from "react-icons/io";

export const Navbar = () => {
  return (
    <main>
      {/* second container */}

      <section className="bg-white w-full p-3 flex items-center justify-around max-[500px]:justify-between">
        {/* Logo Part */}
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 md:h-14 lg:h-16 w-auto " />
        </div>

        {/* Navigation for Large Screens */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-7 text-[12px] ">
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <GiPearlNecklace /> Aishwarya Favourites
              </li>
              <li  className="flex items-center gap-1 cursor-pointer hover:text-primary">Pendants</li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <GiFeatherNecklace /> Necklaces
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <GiEarrings /> Earrings
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <GiEncirclement /> Bangles
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <HiOutlineShoppingBag /> Shop by Collections
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <span className="text-primary">
                  <IoIosOptions />
                </span>
                More
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button className="text-2xl text-primary">☰</button>
        </div>

        {/* Search and Profile Section */}
        <div className="flex gap-2">
          <GoPerson className="text-2xl  cursor-pointer hover:text-primary" />
          <RiSearchLine className="text-primary text-2xl cursor-pointer " />
          <CiHeart className="text-2xl cursor-pointer hover:text-primary" />
          <BsHandbag className="text-2xl cursor-pointer hover:text-primary" />
        </div>
      </section>
    </main>
  );
};
