import React, { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import KYC from "./KYC";
import Security from "./Security";
import UserProfileHeader from "./UserProfileHeader";

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "settings", label: "Settings" },
    { id: "kyc", label: "KYC" },
    { id: "security", label: "Security" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "kyc":
        return <KYC />;
      case "security":
        return <Security />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-6">
        <div className="flex items-center justify-center">
          <UserProfileHeader />
        </div>

      {/* Mobile: native select for tabs */}
      <div className="md:hidden mb-4">
        <label htmlFor="profile-tabs" className="sr-only">
          Select section
        </label>
        <select
          id="profile-tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="block w-full border border-gray-200 rounded-md p-2 bg-white"
        >
          {tabs.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop / tablet: horizontal tabs (scrollable if needed) */}
      <nav className="hidden md:block border-b border-gray-200 mb-6">
        <div className="overflow-x-auto">
          <div className="flex gap-2 sm:gap-3 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-4 py-2 rounded-t-md text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 bg-white"
                    : "text-gray-500 hover:text-gray-700 bg-transparent"
                }`}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default ProfileSection;

