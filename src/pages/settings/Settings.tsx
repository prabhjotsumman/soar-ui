import React from "react";
import Tabs from "../../components/common/Tabs";
import EditPreferences from "./EditPreferences";
import EditProfile from "./EditProfile";
import EditSecurity from "./EditSecurity";

const Settings = () => {
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const content = [<EditProfile />, <EditPreferences />, <EditSecurity />];

  return (
    <div className="bg-white rounded-3xl p-5 md:p-settings-tab-padding lg:p-settings-tab-padding w-ful border-2">
      <Tabs tabs={tabs} content={content} />
    </div>
  );
};

export default Settings;
