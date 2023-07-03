import bgWave from "../../assets/img/bg-sunset-wave.png";
import bgSun from "../../assets/img/bg-sunset.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[80vh] z-0 w-full justify-center items-center flex ">
      <div className="bg-gradient-to-t from-pink-300 to-purple-400 overflow-hidden absolute w-full h-[50%] top-0"></div>
      <Image
        className=" absolute z-10 bottom-[65%] sm-min-w-[1500px] object-contain "
        src={bgSun}
        alt={""}
      />

      <Image
        className=" absolute z-20 bottom-[25%] sm-min-w-[1500px] object-none w-[100vw] "
        src={bgWave}
        alt={""}
      />
    </div>
  );
};

export default Banner;
