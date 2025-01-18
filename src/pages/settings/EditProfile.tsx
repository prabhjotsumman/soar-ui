import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Icon from "../../components/Icon";
import { PROFILE_FORM_FIELDS } from "./constants";

import { EditProfileFormDataType, ProfileFormFieldType } from "../../types";

const getProfileData = (): EditProfileFormDataType | null => {
  const storedData = localStorage.getItem("profileData");
  return storedData ? JSON.parse(storedData) : null;
};

const saveProfileData = (data: EditProfileFormDataType & { profilePic: string | null }) => {
  localStorage.setItem("profileData", JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
};

const FormField: React.FC<{
  field: ProfileFormFieldType;
  register: ReturnType<typeof useForm<EditProfileFormDataType>>["register"]; // Updated typing
  error?: string;
}> = ({ field, register, error }) => (
  <div>
    <label className="block text-charcoal text-base mb-1" htmlFor={field.name}>
      {field.label}
    </label>
    <input
      id={field.name}
      type={field.type}
      aria-label={`Enter ${field.label}`}
      {...register(field.name as keyof EditProfileFormDataType, { required: field.required })}
      className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <span className="text-red-500 text-card-details">{error}</span>}
  </div>
);

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProfileFormDataType>();

  useEffect(() => {
    const profileData = getProfileData();
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
    alert("Your data has been saved.");
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
    <div className="w-full bg-white flex flex-col md:flex-row items-center md:items-start">
      {/* Profile Picture */}
      <div className="my-8 md:mt-0">
        <div className="relative w-settings-profile-pic-mobile h-settings-profile-pic-mobile lg:h-settings-profile-pic lg:w-settings-profile-pic">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
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
            <Icon name="pencil" />
          </button>
        </div>
      </div>

      <div className="w-full font-inter bg-white md:pl-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-form-gap gap-x-7"
          aria-label="Edit Profile Form"
        >
          {PROFILE_FORM_FIELDS.map((field) => (
            <FormField
              key={field.name}
              field={field}
              register={register}
              error={errors[field.name as keyof EditProfileFormDataType]?.message}
            />
          ))}

          {/* Save Button */}
          <div className="col-span-full flex justify-center md:justify-end mt-4">
            <button
              type="submit"
              aria-label="Save profile information"
              className="bg-black text-white px-save-btn-x-padding leading-5 py-2.5 lg:py-3.5 text-card-details lg:text-lg rounded-2xl hover:bg-slate-800 w-full md:w-fit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
