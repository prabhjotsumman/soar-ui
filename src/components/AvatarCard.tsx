interface AvatarProps {
  name: string;
  designation: string;
  picture: string;
  selected?: boolean;
  className?: string;
}

const AvatarCard = ({ name, designation, picture, selected, className, ...props }: AvatarProps) => {
  return (
    <div className={`justify-between text-center h-full ${className}`} {...props}>
      <div className="flex justify-evenly">
        <img src={picture} alt="user" loading="lazy" className="rounded-full w-avatar-image-mobile md:w-avatar-image tablet:w-avatar-image" />
      </div>
      <p className={`${selected ? "font-bold" : "font-normal"} text-xs tablet:text-base mt-avatar-card-name-margin-top`}>
        {name}
      </p>
      <p
        className={`${
          selected ? "font-bold" : "font-normal"
        } text-xs tablet:text-base text-card-details text-card-details-title-gray`}
      >
        {designation}
      </p>
    </div>
  );
};

export default AvatarCard;
