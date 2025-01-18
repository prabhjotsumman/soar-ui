import { ProfileFormFieldType } from "../../types";

export const PROFILE_FORM_FIELDS: ProfileFormFieldType[] = [
  {
    label: "Your Name",
    name: "name",
    type: "text",
    required: "Name is required",
  },
  {
    label: "User Name",
    name: "username",
    type: "text",
    required: "Username is required",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format",
    },
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    required: "Date of Birth is required",
  },
  { label: "Present Address", name: "presentAddress", type: "text" },
  {
    label: "Permanent Address",
    name: "permanentAddress",
    type: "text",
  },
  { label: "City", name: "city", type: "text" },
  { label: "Postal Code", name: "postalCode", type: "text" },
  { label: "Country", name: "country", type: "text" },
];
