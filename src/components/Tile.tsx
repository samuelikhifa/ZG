import React from "react";
import { ImageData } from "./GetImage";

export const Tile = ({
  image,
  index,
  handleClick,
}: {
  image: ImageData;
  index: number;
  handleClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="card bg-base-100 w-96 shadow-lg">
        <figure>
          <img
            onClick={() => handleClick(index)}
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover object-center w-full h-40 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">{image.type}</div>
          </h2>
          <p>{image.tags}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Views: {image.views}</div>
            <div className="badge badge-outline">Likes: {image.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
