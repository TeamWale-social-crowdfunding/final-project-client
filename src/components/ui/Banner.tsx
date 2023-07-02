import bgWave from "../../assets/img/bg-sunset-wave.png";
import bgSun from "../../assets/img/bg-sunset.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[80vh] z-0 w-full justify-center align-middle bg-gradient-to-t from-yellow-200 to-pink-200">
      <Image className=" absolute z-10 bottom-[58%] " src={bgSun} alt={""} />

      <Image
        className=" absolute z-20 w-[100%] bottom-[20%] "
        src={bgWave}
        alt={""}
      />
    </div>
  );
};

export default Banner;
