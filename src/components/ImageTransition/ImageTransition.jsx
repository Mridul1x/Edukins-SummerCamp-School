import React, { useEffect, useState } from "react";
import photo1 from "../../assets/learn@3x.png";
import photo2 from "../../assets/grow@3x.png";
import photo3 from "../../assets/play@3x.png";
import { animated, useTransition } from "@react-spring/web";
import "./ImageTransition.css";

const images = [photo1, photo2, photo3];

const ImageTransition = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_, item) => {
      if (index === item) {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className="bg"
          style={{
            ...style,
            backgroundImage: `url(${images[i]})`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageTransition;
