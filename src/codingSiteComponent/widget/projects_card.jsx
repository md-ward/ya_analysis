import React, { useState, useEffect } from "react";

const ProjectCard = ({ name, description, image }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageSrc(image);
  }, [image]);

  return (
    <div className="bg-white hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      {imageSrc ? (
        <img className="w-full object-cover h-56 md:h-64 lg:h-80" src={imageSrc} alt="" />
      ) : (
        <div className="w-full h-56 md:h-64 lg:h-80 bg-gray-200 animate-pulse"></div>
      )}
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-custom-blue mb-4">{name}</h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;