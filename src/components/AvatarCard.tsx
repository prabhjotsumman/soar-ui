import React from "react";

interface AvatarProps {
  name: string;
  designation: string;
  picture: string;
  selected?: boolean;
}

const AvatarCard = ({ name, designation, picture, selected }: AvatarProps) => {
  return (
    <div className="justify-between text-center h-full">
      <div className="flex justify-evenly">
        <img src={picture} alt="user" className="rounded-full w-avatar-image-mobile md:w-avatar-image lg:w-avatar-image" />
      </div>
      <p className={`${selected ? "font-bold" : "font-normal"} text-xs lg:text-base mt-avatar-card-name-margin-top`}>
        {name}
      </p>
      <p
        className={`${
          selected ? "font-bold" : "font-normal"
        } text-xs lg:text-base text-card-details text-card-details-title-gray`}
      >
        {designation}
      </p>
    </div>
  );
};

export default AvatarCard;
