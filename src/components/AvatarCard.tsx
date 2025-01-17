import React from "react";

interface AvatarProps {
  name: string;
  designation: string;
  picture: string;
  selected?: boolean;
}

const AvatarCard = ({ name, designation, picture, selected }: AvatarProps) => {
  return (
    <div className="justify-between text-center min-w-24 h-full">
      <div className="flex justify-evenly">
        <img src={picture} alt="user" className="rounded-full" />
      </div>
      <p className={`${selected ? "font-bold" : "font-normal"} text-base mt-avatar-card-name-margin-top`}>
        {name}
      </p>
      <p
        className={`${
          selected ? "font-bold" : "font-normal"
        } text-card-details text-card-details-title-gray`}
      >
        {designation}
      </p>
    </div>
  );
};

export default AvatarCard;
