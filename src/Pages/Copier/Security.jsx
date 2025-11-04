import React, { useState } from 'react';
import { Key, Shield, Trash2, Eye, EyeOff, X, Check } from 'lucide-react';

// Reusable component for displaying individual security settings
const SecurityItem = ({ icon: Icon, title, subtitle, status, buttonText, buttonColor, onButtonClick }) => (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-start p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center justify-start sm:justify-center p-3 bg-blue-50 text-blue-600 rounded-lg mr-0 sm:mr-4 mb-3 sm:mb-0 shrink-0">
            <Icon size={24} />
        </div>
        <div className="flex-grow min-w-0">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
                {status && (
                    <span className="text-xs font-medium mb-2 sm:mb-0 sm:mr-2 py-1 px-2.5 rounded-full bg-red-100 text-red-600 whitespace-nowrap">
                        {status}
                    </span>
                )}
                <button
                    onClick={onButtonClick}
                    className={`w-full sm:w-auto py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out whitespace-nowrap
                        ${buttonColor === 'blue'
                            ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
                            : 'bg-red-50 text-red-600 hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-200'
                        }`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    </div>
);

// Reusable Password Input Field
const PasswordInput = ({ id, label, value, onChange, showPassword, toggleVisibility, requirements }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                type={showPassword ? 'text' : 'password'}
                id={id}
                placeholder={label}
                value={value}
                onChange={onChange}
                className="w-full p-4 pr-12 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={`Toggle ${label} visibility`}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
        {requirements && (
            <div className="flex flex-wrap mt-2 gap-2 text-xs text-gray-500">
                {requirements.map((req, index) => (
                    <span key={index} className="flex items-center mt-1">
                        <Check size={12} className="text-green-500 mr-1" />
                        {req}
                    </span>
                ))}
            </div>
        )}
    </div>
);

// --- New 2FA Modal Component ---

const Enable2FAModal = ({ onClose }) => {
    // A placeholder for a QR code image URL or base64 data
    const qrCodeUrl = "https://placehold.co/200x200/000000/FFFFFF?text=QR+Code+2FA";
    
    const handleContinue = () => {
        // In a real application, this would verify the code entered by the user
        console.log('2FA setup continued');
        onClose();
    };

    return (
        // Modal Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-opacity duration-300">
            
            {/* Modal Container: full-screen on xs, centered card on sm+ */}
            <div className="relative w-full h-full sm:h-auto max-h-screen sm:max-w-lg bg-white rounded-none sm:rounded-3xl shadow-2xl p-4 sm:p-6 sm:pb-10 transform transition-all duration-300 overflow-y-auto">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition duration-150"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600">
                        <Shield size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Enable 2-factor authentication</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Set up an extra layer of security for your account
                    </p>
                </div>

                {/* Content */}
                <div className="text-center">
                    <p className="text-gray-700 font-semibold mb-4">Scan the QR code with your 2FA app</p>
                    
                    {/* QR Code Placeholder */}
                    <div className="flex justify-center mb-6">
                        <img 
                            src={qrCodeUrl} 
                            alt="2FA QR Code Placeholder" 
                            className="p-4 border border-gray-200 rounded-lg shadow-inner max-w-full w-48 h-48 sm:w-56 sm:h-56 object-contain"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/CCCCCC/000000?text=Error" }}
                        />
                    </div>
                    
                    {/* Security Key Link */}
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-6">
                        View security key for manual setup
                    </button>
                    
                    {/* Warning Text */}
                    <p className="text-xs text-gray-500 mb-8 px-4 sm:px-0">
                        The QR code/security key will not be shown again after 2FA is enabled. If you have multiple devices, add your account token to all of them before continuing.
                    </p>
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Continue
                </button>

            </div>
        </div>
    );
};

// --- Existing Change Password Modal Component (kept for completeness) ---

const ChangePasswordModal = ({ onClose }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    // Mock implementation of requirements, always checked for visual fidelity
    const requirements = [
        '8+ symbols',
        '1 lowercase',
        '1 uppercase',
        '1 digit',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Password change submitted:', { currentPassword, newPassword });
        onClose();
    };

    return (
        // Modal Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-opacity duration-300">
            
            {/* Modal Container: full-screen on xs, centered card on sm+ */}
            <div className="relative w-full h-full sm:h-auto max-h-screen sm:max-w-lg bg-white rounded-none sm:rounded-3xl shadow-2xl p-4 sm:p-6 sm:pb-10 transform transition-all duration-300 overflow-y-auto">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition duration-150"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600">
                        <Key size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Change password</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Change your password to log in to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-2">
                    
                    <PasswordInput
                        id="current-password"
                        label="Current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        showPassword={showCurrentPassword}
                        toggleVisibility={() => setShowCurrentPassword(!showCurrentPassword)}
                    />

                    <PasswordInput
                        id="new-password"
                        label="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        showPassword={showNewPassword}
                        toggleVisibility={() => setShowNewPassword(!showNewPassword)}
                        requirements={requirements}
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gray-100 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                    >
                        Change password
                    </button>
                </form>

            </div>
        </div>
    );
};


// Main Application Component
const App = () => {
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);

    // Mock handler for other actions
    const handleCloseAccount = () => {
        // In a real app, this would show a confirmation modal
        console.log('Close account action triggered');
    };

    // Updated handler to open the new 2FA modal
    const handleEnable2FA = () => {
        setIs2FAModalOpen(true);
    };

    return (
        <div className="bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 block">Security Settings</h1>
                
                <div className="space-y-4">
                    
                    {/* Password Section */}
                    <SecurityItem
                        icon={Key}
                        title="Password"
                        subtitle="Change your password to log in to your account"
                        buttonText="Change password"
                        buttonColor="blue"
                        onButtonClick={() => setIsPasswordModalOpen(true)}
                    />

                    {/* 2FA Section */}
                    <SecurityItem
                        icon={Shield}
                        title="2-factor authentication"
                        subtitle="Set up an extra layer of security"
                        status="2FA disabled"
                        buttonText="Enable 2FA"
                        buttonColor="blue"
                        onButtonClick={handleEnable2FA}
                    />
                    
                    {/* Close Account Section */}
                    <SecurityItem
                        icon={Trash2}
                        title="Close account"
                        subtitle="If you no longer wish to use nomo, you can permanently close your account"
                        buttonText="Close"
                        buttonColor="red"
                        onButtonClick={handleCloseAccount}
                    />
                </div>
            </div>

            {/* Render Modals conditionally */}
            {isPasswordModalOpen && (
                <ChangePasswordModal onClose={() => setIsPasswordModalOpen(false)} />
            )}
            
            {is2FAModalOpen && (
                <Enable2FAModal onClose={() => setIs2FAModalOpen(false)} />
            )}
        </div>
    );
};

export default App;
