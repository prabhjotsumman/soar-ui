// components/EditProfile/FormField.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { EditProfileFormDataType, ProfileFormFieldType } from "../../types";

interface FormFieldProps {
  field: ProfileFormFieldType;
  register: ReturnType<typeof useForm<EditProfileFormDataType>>["register"]; // Updated typing
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, error }) => (
  <div>
    <label className="block text-charcoal text-base mb-1" htmlFor={field.name}>
      {field.label}
    </label>
    <input
      id={field.name}
      type={field.type}
      aria-label={`Enter ${field.label}`}
      {...register(field.name as keyof EditProfileFormDataType, {
        required: field.required,
      })}
      className={`w-full py-3 lg:py-4 px-input-field-x-padding-mobile border border-card-border rounded-2xl text-input-placeholder text-card-details font-normal leading-4 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <span className="text-red-500 text-card-details">{error}</span>}
  </div>
);

export default FormField;
