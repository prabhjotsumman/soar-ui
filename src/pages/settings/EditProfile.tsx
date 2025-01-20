import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import FormField from "./FormField";

import { PROFILE_FORM_FIELDS } from "./constants";
import { EditProfileFormDataType } from "../../types";
import { getProfileData, saveProfileData } from "../../utils/profileUtils";
import PencilIcon from "../../assets/icons/PencilIcon";

interface ProfileDataType {
  profilePic: string;
  [key: string]: string;
}

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSaveClick = () => {
    // Show feedback message
    setFeedback("Money sent!");

    // Hide feedback after 3 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProfileFormDataType>();

  useEffect(() => {
    const profileData: ProfileDataType | null = getProfileData();
    if (profileData) {
      Object.keys(profileData).forEach((key) => {
        if (key === "profilePic") {
          setProfilePic(profileData[key]);
        } else {
          setValue(key as keyof EditProfileFormDataType, profileData[key]);
        }
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<EditProfileFormDataType> = (data) => {
    const profileData = { ...data, profilePic };
    saveProfileData(profileData);
    handleSaveClick();
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row items-center lg:items-start">
      {/* Profile Picture */}
      <div className="my-8 lg:mt-0 md:mr-14">
        <div className="relative w-settings-profile-pic-mobile h-settings-profile-pic-mobile lg:h-settings-profile-pic lg:w-settings-profile-pic">
          <img
            src={profilePic || "https://placehold.co/150"}
            loading="lazy"
            alt="Profile Picture"
            className="w-full h-full rounded-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleProfilePicChange}
            aria-label="Change profile picture"
          />
          <button
            type="button"
            aria-label="Edit profile picture"
            className="absolute bottom-0 -right-1 bg-black p-1 rounded-full"
          >
            {/* <Icon name="pencil" /> */}
            <PencilIcon />
          </button>
        </div>
      </div>

      <div className="w-full font-inter bg-white lg:pl-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-form-gap gap-x-7"
          aria-label="Edit Profile Form"
          id="edit-profile-form"
          name="edit-profile-form"
        >
          <div className="sm:col-span-1">
            {PROFILE_FORM_FIELDS?.slice(0, 5).map((field) => (
              <FormField
                key={field.name}
                field={field}
                register={register}
                error={
                  errors[field.name as keyof EditProfileFormDataType]?.message
                }
              />
            ))}
          </div>
          <div className="sm:col-span-1">
            {PROFILE_FORM_FIELDS?.slice(5).map((field) => (
              <FormField
                key={field.name}
                field={field}
                register={register}
                error={
                  errors[field.name as keyof EditProfileFormDataType]?.message
                }
              />
            ))}
          </div>
          {/* Save Button */}
          <div className="col-span-full flex justify-center md:justify-end mt-4">
            <button
              type="submit"
              aria-label="Save profile information"
              className={`${
                feedback
                  ? "bg-green-500 animate-pulse hover:bg-green-500"
                  : " bg-black hover:bg-slate-800"
              } text-white px-save-btn-x-padding leading-5 py-2.5 lg:py-3.5 text-card-details lg:text-lg rounded-2xl  w-full md:w-fit`}
            >
              {feedback ? "Saved!" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
