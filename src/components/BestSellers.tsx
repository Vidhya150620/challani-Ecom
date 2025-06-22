
import {bestSelleersData} from "../constantData"
export const BestSellers = () => {
  return (
    <>
      <section className="mt-9 w-[97%] mx-auto max-w-[1400px]">
        {/* <p className="text-primary text-xl text-center">Best Sellers</p> */}
        <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl">Best Sellers</h1>
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  w-[75%] mx-auto mt-9">
          {bestSelleersData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover rounded"
              />
              <p className="text-gray-500 text-[14px] mt-1 text-center">
                {item.title}
              </p>
              <p className="text-gray-500 text-[13px] mt-4">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
