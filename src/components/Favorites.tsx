import { CiHeart } from "react-icons/ci";
import {favoriteItems} from "../constantData"
export const Favorites = () => {
  return (
    <>
      <section className="mx-auto max-w-[1400px] mt-10">
        {/* <p className="text-primary flex justify-center mt-9 items-center gap-2">
          Featured <CiHeart className="text-2xl text-primary" /> Favourites
        </p> */}
    <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl flex items-center space-x-2">
      Featured <CiHeart className="text-2xl text-primary" /> Favourites
    </h1>
  </div>
</div>

        <div className="flex flex-wrap justify-center gap-10 mt-10 ">
          {favoriteItems.map((item, index) => (
            <div
              key={index}
              className=" w-[300px] h-[277px] flex items-center rounded-md overflow-hidden
  shadow-lg shadow-gray-200 
  hover:shadow-xl hover:shadow-gray-300 
  transition-shadow duration-300 flex-col"
            >
              <div className="w-[200px] h-[250px] mx-auto flex flex-col items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-2xl"
                />
              </div>
              <p
                className="text-primary  font-normal text-center"
                style={{ fontSize: item.font_size }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    <hr className="border-gray-200 border-t-2 w-full mt-5" />
    </>
  );
};
