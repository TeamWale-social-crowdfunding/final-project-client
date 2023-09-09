import React from "react";
import Gallery from "./Gallery";

const MediaGallery = (dataMedia: {
  data: { type: string; url: string; key: string }[];
}) => {
  return (
    <div>
      {dataMedia.data.length == 1 ? (
        <img
          className="max-h-[462px] w-auto max-w-full mb-2 rounded-xl"
          src={dataMedia.data[0].url}
          alt="image description"
        />
      ) : (
        <Gallery data={[...dataMedia.data]}></Gallery>
      )}
    </div>
  );
};

export default MediaGallery;
