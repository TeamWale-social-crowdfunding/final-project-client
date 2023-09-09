import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = (galleryData: {
  data: { type: string; url: string; key: string }[];
}) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = React.useRef<Slider>(null);

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <button
        onClick={handleNextSlide}
        type="button"
        className="inline-flex justify-center items-center w-10 h-10 bg-gray-200 dark:bg-gray-700 p-[10px] text-sm font-medium text-gray-400 bold rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50 absolute right-[-100px] top-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
      <button
        onClick={handlePrevSlide}
        type="button"
        className="inline-flex justify-center items-center w-10 h-10 bg-gray-200 dark:bg-gray-700 p-[10px] text-sm font-medium text-gray-400 bold rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50 absolute left-[-100px] top-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>

      <Slider ref={sliderRef} {...settings} className=" max-w-[572px] mb-2">
        {galleryData.data.map((media, key) => (
          <div key={key} className="">
            <div className="">
              <img
                className="max-h-[462px] w-auto max-w-full rounded-xl m-0"
                src={media.url}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
