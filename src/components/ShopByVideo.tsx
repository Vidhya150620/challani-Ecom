// src/assets/videos/index.js
import pavishingNeclace from '../assets/videos/pavishingNeclace.mp4';
import rudhraRopeNeclace from '../assets/videos/rudhraRopeNeclace.mp4';
import singleLineNavarathna from '../assets/videos/singleLineNavarathna.mp4';
import singleLineNavarathra2 from '../assets/videos/singleLineNavarathra2.mp4';

export const videos = [
      {
    src: rudhraRopeNeclace,
    title: 'Rudhra Rope Necklace',
  },
  {
    src: pavishingNeclace,
    title: 'Pavishing Necklace',
  },
  {
    src: singleLineNavarathna,
    title: 'Single Line Navarathna',
  },
  {
    src: singleLineNavarathra2,
    title: 'Single Line Navarathna 2',
  },
];

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
<section className="mt-9 w-[95%] mx-auto">
      <p className="text-primary text-xl text-center">Shop By Video</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mt-6">
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
