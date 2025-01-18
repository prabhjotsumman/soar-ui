// utils/profileUtils.ts
export const getProfileData = <T>(): T | null => {
  try {
    const storedData = localStorage.getItem("profileData");
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error("Error retrieving profile data:", error);
    return null;
  }
};

export const saveProfileData = <T>(data: T) => {
  try {
    localStorage.setItem("profileData", JSON.stringify(data));
    window.dispatchEvent(new Event("storage"));
  } catch (error) {
    console.error("Error saving profile data:", error);
  }
};
