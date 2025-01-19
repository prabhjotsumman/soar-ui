
export type ProfileFormFieldType = {
    label: string;
    name: string;
    type: string;
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
  };

  
  export type EditProfileFormDataType = {
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
    profilePic?:string;
  };
  