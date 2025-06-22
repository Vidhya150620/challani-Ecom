import {collectionsData} from "../constantData";
import {shopNow} from "../assets/handPickedCollections";
export const HandPickedCollection = () => {
  return (
    <>

       <section className="w-full mt-9">
      <div className="mx-auto">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
            <h1 className="text-primary font-serif text-xl">HandPicked Collections</h1>
          </div>
        </div>

        <div className="mx-auto mt-10">
          <article className="w-[90%] md:w-[70%] mx-auto flex flex-col md:flex-row gap-6">
            
            {/* Left Side: Main Image */}
            <div className="md:w-1/2 w-full h-full flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={shopNow}
                  alt="Shop Now"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white text-primary rounded-full px-4 py-2 text-sm font-medium shadow">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Grid of smaller images */}
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                {collectionsData.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#995C5C] bg-opacity-80 text-white text-center text-sm font-medium rounded-b-2xl py-2">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </article>
        </div>
      </div>
    </section>
    </>
  );
};
