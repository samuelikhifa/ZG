"use client";

import React from "react";
import { ImageData, Slide } from "./GetImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Tile from "./Tile";

const ImageSlide = ({
  images,
  slideImages,
}: {
  images: ImageData[];
  slideImages: Slide[];
}) => {
  const [index, setIndex] = React.useState(-1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {images.map((image, i) => (
          <Tile
            key={image.id}
            image={image}
            index={i}
            handleClick={handleClick}
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slideImages}
      />
    </div>
  );
};

export default ImageSlide;
