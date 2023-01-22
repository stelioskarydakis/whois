import React, { useEffect, useState } from "react";
import { photos } from "../../data";
import "./slideCard.css";

const SlideCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = photos.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="img-container">
      {photos.map((slides, slideIndex) => {
        const { id, image } = slides;
        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div className={`img-container__inner ${position} `} key={id}>
            <img src={image} alt="Stylianos" />
          </div>
        );
      })}
    </div>
  );
};

export default SlideCard;
