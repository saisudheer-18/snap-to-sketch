import React from 'react';

const SketchCard = ({ title, image }) => {
  return (
    <div className="w-56 bg-white border rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-3 text-center">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default SketchCard;
