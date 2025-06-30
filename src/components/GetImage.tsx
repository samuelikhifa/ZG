"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageSlide from "./ImageSlide";

export type Slide = {
  src: string;
  width: number;
  height: number;
};

export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type: string;
  likes: number;
  views: number;
};

const slideImages = (images: ImageData[]): Slide[] => {
  return images.map((img) => ({
    src: img.largeImageURL || img.webformatURL,
    width: 1920,
    height: 1080,
  }));
};

const GetImage = ({ query }: { query: string }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_KEY = "51083339-6623a9170848d3b7a33b62921"; // ✅ Hardcoded
        const res = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
            query || "nature"
          )}`
        );
        const data = res.data;

        if (data?.hits) {
          setImages(data.hits);
          setSlides(slideImages(data.hits));
        }
      } catch (err) {
        console.error("❌ Failed to fetch images:", err);
      }
    }

    fetchData();
  }, [query]);

  return <ImageSlide images={images} slideImages={slides} />;
};

export default GetImage;
