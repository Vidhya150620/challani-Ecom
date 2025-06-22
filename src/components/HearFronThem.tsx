
import {data} from "../constantData"
export const HearFromThem = () => {
  return (
  <section className="mt-9 w-[98%] mx-auto max-w-[1400px]">
      <p className=" text-xl text-center text-gray-600 text-montaga">Hear from <span className="font-ooohbaby text-primary font-semibold">Them!</span></p>
      <hr className="border-gray-100 border-t-2 w-full mt-5" />
  
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.img}
              alt={item.title}
              className={`w-full h-48 object-cover rounded-sm ${item.text === "" ? "mt-[30px]" : ""}`}
            />
            {item.text && (
              <>
                <p className="text-primary font-semibold mt-2 font-ooohbaby">{item.title}</p>
                <p className="text-gray-600 text-[9px] mt-1 "><i>{item.text}</i></p>
              </>
            )}
          </div>
        ))}
      </div>
      <hr className="border-gray-100 border-t-2 w-full mt-5" />
    </section>
  );
};
