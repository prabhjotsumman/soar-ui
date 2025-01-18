import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Icon from "../../components/Icon";
import { ProfileFormFields } from "../../constants";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        if (key === "profilePic") {
          setProfilePic(parsedData[key]);
        } else {
          setValue(key as keyof FormData, parsedData[key]);
        }
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    const profileData = { ...data, profilePic };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    alert("Your data has been saved.");
    window.dispatchEvent(new Event("storage"));
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
            alt="Photo"
            className="w-full h-full rounded-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleProfilePicChange}
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
        >
          {ProfileFormFields.map(({ label, name, type, ...rest }) => (
            <div key={name}>
              <label className="block text-charcoal text-base mb-1">
                {label}
              </label>
              <input
                type={type}
                aria-label={`Enter ${label}`}
                {...register(name as keyof FormData, rest)}
                className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                  errors[name as keyof FormData]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[name as keyof FormData] && (
                <span className="text-red-500 text-card-details">
                  {errors[name as keyof FormData]?.message}
                </span>
              )}
            </div>
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
