import React from 'react';
import { ChevronRight, Shield, Globe } from 'lucide-react';

// ============================
// ✅ Reusable Status Badge
// ============================
const StatusBadge = ({ label, color, icon: Icon, isClickable = true }) => {
  // Color theme mapping for better readability
  const colorClasses = {
    red: 'bg-red-100 text-red-700 hover:bg-red-200',
    orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  };

  return (
    <span
      className={`
        inline-flex items-center text-xs font-semibold 
        px-3 py-1.5 rounded-full whitespace-nowrap transition duration-150
        ${colorClasses[color] || colorClasses.gray}
        ${isClickable ? 'cursor-pointer' : 'cursor-default'}
      `}
      onClick={() => isClickable && console.log(`${label} badge clicked`)}
    >
      {Icon && <Icon size={14} className="mr-1" />}
      {label}
      {isClickable && <ChevronRight size={14} className="ml-1" />}
    </span>
  );
};

// ============================
// ✅ Level Card Component
// ============================
const LevelCard = ({ currentLevel, nextLevel, progress, depositGoal }) => {
  const isBronzeActive = nextLevel === 'Bronze';
  const bronzeClass = isBronzeActive
    ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
    : 'bg-gray-100 text-gray-500';

  return (
    <div className="p-4 bg-white rounded-2xl shadow-xl border border-gray-100 w-full sm:w-auto">
      {/* Level Badges */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
        {/* Current Level */}
        <div
          className="flex items-center text-sm font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 cursor-pointer hover:bg-blue-200"
          onClick={() => console.log('Starter level clicked')}
        >
          <Shield size={16} className="mr-1" />
          {currentLevel}
          <ChevronRight size={16} className="ml-1" />
        </div>

        {/* Next Level */}
        <div
          className={`flex items-center text-sm font-semibold px-3 py-1.5 rounded-full ${bronzeClass} cursor-pointer`}
          onClick={() => console.log('Bronze level clicked')}
        >
          <Globe size={16} className="mr-1" />
          {nextLevel}
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-200 rounded-full mb-3 w-full">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      {/* Progress Text */}
      <p className="text-xs text-gray-600 font-medium">
        <span className="font-bold text-gray-900">Deposit ${depositGoal}</span> to reach bronze level
      </p>
    </div>
  );
};

// ============================
// ✅ Profile Header Component
// ============================
const ProfileHeader = () => {
  const [nameInitials] = React.useState('TO');
  const [fullName] = React.useState('Testing One');
  const [email] = React.useState('rani...lipx.com');

  // Level data
  const levelData = {
    currentLevel: 'Starter',
    nextLevel: 'Bronze',
    progress: 40,
    depositGoal: '250.00',
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 font-sans">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        
        {/* --- Left Section --- */}
        <div className="flex items-start">
          {/* Avatar */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl sm:text-2xl mr-4 sm:mr-6">
            {nameInitials}
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            {/* Status Badges */}
            <div className="flex flex-wrap gap-2 mb-2 mt-1">
              <StatusBadge label="Unverified" color="red" isClickable />
              <StatusBadge label="Basic" color="orange" isClickable={false} />
              <StatusBadge label="2FA disabled" color="red" isClickable />
            </div>

            {/* Email */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1 break-all">
              {email}
            </h2>

            {/* Full Name */}
            <p className="text-sm sm:text-base text-gray-500">{fullName}</p>
          </div>
        </div>

        {/* --- Right Section (Level Card) --- */}
        <div className="w-full sm:w-auto flex justify-start lg:justify-end">
          <LevelCard {...levelData} />
        </div>
      </div>
    </div>
  );
};

// ============================
// ✅ Main App Component
// ============================
const App = () => (
  <div className="p-4 sm:p-8 font-sans">
    <div className="mx-auto">
      <ProfileHeader />
    </div>
  </div>
);

export default App;
