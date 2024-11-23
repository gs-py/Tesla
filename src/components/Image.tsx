import { useState } from "react";

const Image = () => {
  const [count, setCount] = useState(1084);
  const generateImageUrl = (id: number) =>
    `https://picsum.photos/id/${id}/200/250`;

  return (
    <div className="  bg-[#adbbda] slider">
      <div className="slider-track">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="slide">
            <img
              src={generateImageUrl(index + 1)} // Dynamically generate the image URL
              alt={`Image ${index + 1}`}
              width="300"
              height="250"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
