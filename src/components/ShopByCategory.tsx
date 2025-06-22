import {shopByCategoryData} from "../constantData"
export const ShopByCategory = () =>{
    return(
        <>

           <section className=" mx-auto mt-9 w-[97%]">
        {/* <p className="text-primary text-xl text-center">Shop By Category</p> */}
        <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl">Shop By Category</h1>
  </div>
</div>
         <div className="overflow-hidden mt-9 mx-auto">
          <div className="flex animate-scroll gap-12">
            {[...shopByCategoryData, ...shopByCategoryData].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-none w-48"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-48 h-60 rounded-lg object-cover"
                />
                <p className="text-primary text-sm font-medium text-center mt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#B46B6F] text-white text-center mt-8 p-3 rounded  text-[12px]">
          CHECK OUT OUR AISHWARYA COLLECTIONS 
          <span className="font-semibold text-[14px] ml-8 cursor-pointer">SHOP NOW</span>
        </div>
      </section>

        </>
    )
}