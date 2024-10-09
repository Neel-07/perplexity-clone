import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({
  title,
  description,
  image,
  id,
  onClick,
  isFullWidth,
  userImage,
  userName,
}) => {
  return (
    <div
      className={`cursor-pointer bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transition-transform transform
        ${isFullWidth ? "col-span-full w-full" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>

        {/* New Flex Container for User Image, Name, and Bookmark Icon */}
        <div className="flex items-center justify-between mt-4">
          {/* Left Side: User Image and Name */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/474x/f2/d3/88/f2d388ce2aa7042913b5150e01e1b68e.jpg"
              alt={userName}
              className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-gray-200"
            />
            <span className="text-sm font-medium">Neel</span>
          </div>

          {/* Right Side: Bookmark Icon */}
          <div className="text-gray-400 hover:text-blue-600">
            <Bookmark className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
