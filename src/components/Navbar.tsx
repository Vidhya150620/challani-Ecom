import logo from "../assets/logos/logo.png"
import { CiHeart } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
export const Navbar = () => {
    return (
        <main>
            <section className="bg-primary w-full p-2 overflow-hidden">
                <div className="whitespace-nowrap">
                    <p className="text-white text-[12px] animate-marquee inline-block">
                        Happy New Year! Enjoy World Wide Free shipping for this wedding season - Valid till 31st October
                    </p>
                </div>
            </section>
            {/* second container */}
            <section className="bg-white w-full p-3 flex items-center justify-around">
                {/* logo part */}
                <div>
                    <img  src={logo} height={60} width={130}/>
                </div>
                {/* mid nav */}
                <div >
                    <nav >
                        <ul className="flex gap-10">
                            <li>Aishwarya Favourites</li>
                            <li>Pendants</li>
                            <li>Necklaces</li>
                            <li>Earrings</li>
                            <li>Bangles</li>
                            <li>Shop by Collections</li>
                            <li>More</li>
                        </ul>
                    </nav>
                </div>
                {/* search and profile */}
                <div className="flex gap-3">
                    <GoPerson className="text-2xl"/>
                    <RiSearchLine className="text-primary text-2xl"/>
                    <CiHeart className="text-2xl"/>
                    <BsHandbag className="text-2xl"/>
                </div>

            </section>
        </main>
    );
};
