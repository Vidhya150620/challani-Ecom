import {shopByCollectionsData} from "../constantData"
export const ShopByCollections = () => {
  return (
    <>
      <section className="w-[95%] mt-9 mx-auto">
        {/* <p className="text-primary text-xl text-center">Shop By Collections</p> */}
        <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl">Shop By Collections</h1>
  </div>
</div>
        <div className="flex flex-wrap justify-center gap-8 mt-9">
          {shopByCollectionsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center w-[200px] max-[500px]:w-[80%]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[180px] object-cover"
              />
              <p className="text-primary text-sm font-medium text-center mt-2 mb-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>


      </section>
    </>
  );
};
