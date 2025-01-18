import React from "react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Icon from "../../components/Icon";

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
    <div className="w-full bg-white flex flex-col md:flex-row items-center md:items-start lg:items-start xl:items-start">
      {/* Profile Picture */}
      <div className="my-8 md:mt-0 lg:mt-0 xl:mt-0">
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

      <div className="w-full font-inter bg-white md:pl-12 lg:pl-12 xl:pl-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-form-gap gap-x-7"
        >
          {/* Name */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base mb-1">Your Name</label>
            <input
              type="text"
              aria-label="Enter Name"
              {...register("name", { required: "Name is required" })}
              className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-card-details">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">User Name</label>
            <input
              type="text"
              aria-label="Enter UserName"
              {...register("username", { required: "Username is required" })}
              className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <span className="text-red-500 text-card-details">
                {errors.username.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Email</label>
            <input
              type="email"
              aria-label="Enter Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-card-details">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Password</label>
            <input
              type="password"
              aria-label="Enter Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-card-details">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Date of Birth</label>
            <input
              type="date"
              aria-label="Enter Date of Birth"
              {...register("dob", { required: "Date of Birth is required" })}
              className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
                errors.dob ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.dob && (
              <span className="text-red-500 text-card-details">{errors.dob.message}</span>
            )}
          </div>

          {/* Present Address */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Present Address</label>
            <input
              type="text"
              aria-label="Enter present address"
              {...register("presentAddress")}
              className="w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal "
            />
          </div>

          {/* Permanent Address */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">
              Permanent Address
            </label>
            <input
              type="text"
              aria-label="Enter permanent address"
              {...register("permanentAddress")}
              className="w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal "
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">City</label>
            <input
              type="text"
              aria-label="Enter city"
              {...register("city")}
              className="w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal "
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Postal Code</label>
            <input
              type="text"
              aria-label="Enter postal code"
              {...register("postalCode")}
              className="w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal "
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-charcoal  text-tabs-heading-mobile lg:text-base  mb-1">Country</label>
            <input
              type="text"
              aria-label="Enter country"
              {...register("country")}
              className="w-full py-3 lg:py-4 px-input-field-x-padding-mobile lg:px-5 border border-card-border  rounded-2xl text-input-placeholder text-card-details font-normal "
            />
          </div>

          {/* Save Button */}
          <div className="col-span-full flex justify-center md:justify-end lg:justify-end xl:justify-end">
            <button
              type="submit"
              aria-label="Save profile information"
              className="bg-black text-white px-save-btn-x-padding leading-5 py-2.5 lg:py-3.5 text-card-details lg:text-lg rounded-2xl  hover:bg-slate-800 w-full md:w-fit lg:w-fit xl:w-fit"
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
