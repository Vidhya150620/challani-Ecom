// src/assets/videos/index.js

import {videos} from "../constantData"
export const ShopByVideo = () => {
      const handleMouseEnter = (event:any) => {
    event.currentTarget.play();
  };
  
  const handleMouseLeave = (event : any) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;
  };
  return (
    <>
<section className="mt-9 w-[95%] mx-auto max-w-[1400px]">
      {/* <p className="text-primary text-xl text-center">Shop By Video</p> */}
 <div className="flex justify-center">
  <div className="bg-gradient-to-r from-primaryLight to-white rounded-md px-3 py-1 inline-block">
    <h1 className="text-primary font-serif text-xl">Shop By Video</h1>
  </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mt-9">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-[330px] rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover cursor-pointer"
                muted
                playsInline
                preload="auto"
                autoPlay
                loop
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-2  text-center text-primary font-medium text-[16px]" >{video.title}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};
