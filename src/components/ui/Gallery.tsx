import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
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

      <Slider ref={sliderRef} {...settings} className=" max-w-[572px]">
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="pr-3">
            <img
              className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
