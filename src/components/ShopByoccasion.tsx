import {banner,} from "../assets/shopByOccasaion";
import {occasions} from "../constantData"

export const ShopByOccasion = () => {
  return (
    <>
      <section className="w-full mt-9">
        {/* <p className="text-primary text-xl text-center">Shop By Occasion</p> */}
        <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl">Shop By Occasion</h1>
  </div>
</div>
        <div className="relative mt-4 rounded-2xl overflow-hidden  mx-auto">
          {/* Main Banner */}
          <img
            src={banner}
            alt="Shop By Occasion Banner"
            className="w-full rounded-2xl object-cover h-[270px]"
          />

          <div className="absolute top-1/2 right-8 flex space-x-1 transform -translate-y-1/2">
            {occasions.map((item, index) => {
              const isAnniversary = item.title === "Anniversary";
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-start p-3 
        ${isAnniversary ? "h-40 w-36" : "h-36 w-36"}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`rounded-t-xl object-cover ${
                      isAnniversary ? "w-36 h-28" : "w-40 h-24"
                    }`}
                  />
                  <p className="text-gray-500 text-[12px] mt-2 text-center">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
