import React, { useState } from 'react';
import { 
    User, Mail, Phone, Calendar, Flag, Link, X, UserPlus, Send, Monitor, 
    Key, ShieldCheck, Trash2, Globe, MonitorPlay, Eye, EyeOff, MessageSquare, Lock
} from 'lucide-react';

// --- Reusable Components ---

const ModalContainer = ({ title, subtitle, icon: IconComponent, children, onClose, iconColorClass = "text-blue-600 bg-blue-100" }) => (
    // Modal Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-opacity duration-300">
        
        {/* Modal Container */}
        <div
            className="relative w-full max-w-3xl sm:max-w-lg md:max-w-2xl h-full sm:h-auto max-h-screen sm:max-h-[85vh] bg-white rounded-none sm:rounded-3xl shadow-2xl p-4 sm:p-10 transform transition-all duration-300 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-2 rounded-full transition duration-150 bg-white/80 sm:bg-transparent"
                aria-label="Close modal"
            >
                <X size={22} />
            </button>

            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
                <div className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-3 ${iconColorClass}`}>
                    {IconComponent && <IconComponent size={28} />} 
                    {!IconComponent && title.includes("MT5") && (
                        <span role="img" aria-label="MT5">
                            <img src="https://placehold.co/64x64/F2A900/white?text=MT5" alt="MT5 Icon" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
                        </span>
                    )}
                </div>
                <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            </div>

            {/* Content */}
            <div className="px-0 sm:px-2 pb-6">
                {children}
            </div>
        </div>
    </div>
);

// Reusable component for displaying individual settings rows
const SettingItem = ({ icon: IconComponent, title, subtitle, contentRight, buttonAction, customContent }) => (
    <div className="flex flex-col sm:flex-row sm:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center sm:items-start mb-3 sm:mb-0 sm:mr-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-3 flex-shrink-0">
                <IconComponent size={22} /> 
            </div>
            <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
            </div>
        </div>

        <div className="flex items-center sm:ml-auto sm:flex-shrink-0 min-w-0 justify-between w-full sm:w-auto">
            {contentRight ? (
                <span className="text-gray-700 font-medium text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis mr-4">{contentRight}</span>
            ) : null}
            <div className="flex items-center gap-2">
                {customContent}
                {buttonAction && (
                    <button
                        onClick={buttonAction.onClick}
                        className={`py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out whitespace-nowrap
                            ${buttonAction.style === 'blue'
                                ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm'
                                : buttonAction.style === 'red'
                                    ? 'bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 text-sm'
                                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm'
                            }`}
                    >
                        {buttonAction.text}
                    </button>
                )}
            </div>
        </div>
    </div>
);


// --- Modal Implementations ---

const CreateUsernameModal = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); console.log('Username created:', username); onClose(); };

    return (
        <ModalContainer title="Create username" subtitle="Set your username for a public profile" icon={UserPlus} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="mb-6 sm:mb-8">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 sm:p-4 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-3 sm:py-4 bg-gray-100 text-gray-700 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300">
                    Create username
                </button>
            </form>
        </ModalContainer>
    );
};

const ChangeEmailModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); console.log('Change Email requested:', email); onClose(); };

    return (
        <ModalContainer title="Change Email" subtitle="Enter your new primary login email" icon={Mail} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="mb-6 sm:mb-8">
                    <input
                        type="email"
                        placeholder="New Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 sm:p-4 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-3 sm:py-4 bg-gray-100 text-gray-700 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300">
                    <div className="flex items-center justify-center"> <Send size={18} className="mr-2" /> Send Verification </div>
                </button>
            </form>
        </ModalContainer>
    );
};

const ChangePhoneModal = ({ onClose }) => {
    const [phone, setPhone] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); console.log('Change Phone requested:', phone); onClose(); };

    return (
        <ModalContainer title="Change Phone Number" subtitle="Enter your new phone number for verification" icon={Phone} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="mb-6 sm:mb-8">
                    <input
                        type="tel"
                        placeholder="New Phone Number (e.g., +1 555 123 4567)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 sm:p-4 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-3 sm:py-4 bg-gray-100 text-gray-700 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300">
                    <div className="flex items-center justify-center"> <Send size={18} className="mr-2" /> Send OTP </div>
                </button>
            </form>
        </ModalContainer>
    );
};

const ChangePasswordModal = ({ onClose }) => {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);

    return (
        <ModalContainer title="Change password" subtitle="Change your password to log in to your account" icon={Key} onClose={onClose} iconColorClass="text-purple-600 bg-purple-100">
            <form onSubmit={(e) => { e.preventDefault(); console.log('Password changed'); onClose(); }}>
                <div className="space-y-4 mb-4">
                    <div className="relative">
                        <input
                            type={showCurrent ? 'text' : 'password'}
                            placeholder="Current password"
                            className="w-full p-3 sm:p-4 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 pr-12 transition duration-150"
                            required
                        />
                        <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
                            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type={showNew ? 'text' : 'password'}
                            placeholder="New password"
                            className="w-full p-3 sm:p-4 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 pr-12 transition duration-150"
                            required
                        />
                        <button type="button" onClick={() => setShowNew(!showNew)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
                            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
                
                <div className="text-left text-xs text-gray-500 flex flex-wrap justify-between mb-8">
                    {['8+ symbols', '1 lowercase', '1 uppercase', '1 digit'].map(req => (
                        <span key={req} className="flex items-center mt-1 mr-4">
                            <span className="text-green-500 mr-1">✓</span> {req}
                        </span>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 sm:py-4 bg-gray-100 text-gray-700 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                    Change password
                </button>
            </form>
        </ModalContainer>
    );
};

const Enable2FAModal = ({ onClose }) => (
    <ModalContainer title="Enable 2-factor authentication" subtitle="Set up an extra layer of security for your account" icon={ShieldCheck} onClose={onClose}>
        <div className="mb-6 sm:mb-8">
            <h3 className="text-md font-semibold text-gray-800 mb-4">Scan the QR code with your 2FA app</h3>
            
            {/* QR Code Placeholder */}
            <div className="flex justify-center bg-gray-100 p-4 sm:p-6 rounded-lg mb-4">
                <img 
                    src="https://placehold.co/180x180/000000/white?text=QR+Code" 
                    alt="QR Code Placeholder" 
                    className="w-[120px] sm:w-[180px] h-auto"
                />
            </div>
            
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                View security key for manual setup
            </a>

            <p className="text-xs text-gray-500 mt-4 px-1 sm:px-4">
                The QR code/security key will not be shown again after 2FA is enabled. If you have multiple devices, add your account token to all of them before continuing.
            </p>
        </div>
        <button
            onClick={() => { console.log('2FA Enabled'); onClose(); }}
            className="w-full py-3 sm:py-4 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
            Continue
        </button>
    </ModalContainer>
);

const CloseAccountModal = ({ onClose }) => (
    <ModalContainer title="Close Account" subtitle="Are you sure you want to permanently close your account?" icon={Trash2} onClose={onClose} iconColorClass="text-red-500 bg-red-100">
        <p className="text-gray-700 mb-6 sm:mb-8">
            Closing your account is permanent and will delete all associated data. This action cannot be undone.
        </p>
        <button
            onClick={() => { console.log('Account Closed'); onClose(); }}
            className="w-full py-3 sm:py-4 bg-red-500 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-red-600 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300"
        >
            Confirm Close Account
        </button>
        <button
            onClick={onClose}
            className="w-full py-3 sm:py-2 mt-3 text-gray-500 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-100 transition duration-150"
        >
            Cancel
        </button>
    </ModalContainer>
);

const MT5ActivationModal = ({ onClose }) => (
    <ModalContainer title="Deposit to activate MT5" subtitle="Make a deposit to your account to receive the MetaTrader5 credentials" icon={null} onClose={onClose} iconColorClass="bg-yellow-100">
        <div className="space-y-4 mb-4">
            <div className="bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-sm mb-2">7+ deposit methods</h4>
                <div className="flex justify-around items-center space-x-2">
                    <img src="https://placehold.co/32x32/00A499/white?text=T" alt="Tether" className="rounded-full w-8 h-8" />
                    <img src="https://placehold.co/32x32/FFC32D/white?text=UPI" alt="UPI" className="rounded-full w-8 h-8" />
                    <img src="https://placehold.co/32x32/004C99/white?text=VISA" alt="Visa" className="rounded-full w-8 h-8" />
                </div>
            </div>

            <div className="bg-blue-50 p-3 sm:p-4 rounded-xl flex justify-between items-center">
                <p className="text-sm font-medium text-blue-800">Deposit today to get a <span className="font-extrabold">50% bonus</span></p>
                <span className="text-2xl font-extrabold text-blue-600">50%</span>
            </div>

            <button
                onClick={() => { console.log('Navigating to Deposit'); onClose(); }}
                className="w-full py-3 sm:py-4 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Deposit now
            </button>
            <button
                onClick={onClose}
                className="w-full py-2 text-gray-500 font-bold text-md rounded-xl hover:text-gray-700 transition duration-150"
            >
                Close
            </button>
        </div>
    </ModalContainer>
);

// --- NEW FEEDBACK MODAL ---
const LeaveFeedbackModal = ({ onClose }) => {
    const [feedback, setFeedback] = useState('');
    const MAX_CHARS = 1000;
    const isFeedbackValid = feedback.length > 0 && feedback.length <= MAX_CHARS;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFeedbackValid) {
            console.log('Feedback submitted:', feedback);
            alert('Thank you for your feedback!'); 
            onClose();
        }
    };

    return (
        <ModalContainer title="Leave your feedback" subtitle="Let us know what you would like to see on nomo!" icon={MessageSquare} onClose={onClose} iconColorClass="text-blue-600 bg-blue-100">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        placeholder={`Leave your feedback up to ${MAX_CHARS} characters...`}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-3 sm:p-4 h-28 sm:h-32 text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
                        maxLength={MAX_CHARS}
                        required
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                        {feedback.length} / {MAX_CHARS} characters
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!isFeedbackValid}
                    className={`w-full py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl transition duration-150 ease-in-out focus:outline-none focus:ring-4
                        ${isFeedbackValid ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                    Continue
                </button>
            </form>
        </ModalContainer>
    );
};


// --- Main Application Component ---

const App = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [isDemoMode, setIsDemoMode] = useState(true);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);
    const USER_ID = "bb151bce-c11a-49d9-8546-78e0a62df5f7"; // Mock User ID

    return (
        <div className="bg-gray-50 p-4 sm:p-8 font-sans min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">Profile Settings</h1>
                
                {/* Demo Mode Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-white border-l-4 border-blue-600 rounded-xl shadow-md mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-full mr-0 sm:mr-4 flex-shrink-0">
                        <Monitor size={20} />
                    </div>
                    <div className="flex-grow min-w-0">
                        <h3 className="text-lg font-semibold text-gray-800">Demo mode</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Try trading on the platform risk-free using demo funds — no deposit required!
                        </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-0 sm:ml-4 flex-shrink-0 mt-2 sm:mt-0">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isDemoMode}
                            onChange={() => setIsDemoMode(!isDemoMode)}
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                </div>

                <div className="space-y-4 mb-8">
                    
                    {/* --- CONTACT/IDENTITY SETTINGS --- */}
                    <SettingItem
                        icon={User}
                        title="Nickname"
                        subtitle="Set your username for a public profile"
                        contentRight={null}
                        buttonAction={{ text: 'Create username', style: 'blue', onClick: () => openModal('username') }}
                    />

                    <SettingItem
                        icon={Mail}
                        title="Email"
                        subtitle="Change your primary login email and communication channel"
                        contentRight="ranihe5049@fillipx.com"
                        buttonAction={{ text: 'Change', style: 'default', onClick: () => openModal('email') }}
                    />
                    
                    <SettingItem
                        icon={Phone}
                        title="Phone"
                        subtitle="Change your phone number"
                        contentRight="+97 250 381 6969"
                        buttonAction={{ text: 'Change', style: 'default', onClick: () => openModal('phone') }}
                    />

                    <SettingItem
                        icon={Calendar}
                        title="Date of birth"
                        subtitle={<>You can <a href="#" className="text-blue-600 hover:underline">contact support</a> to update your date of birth</>}
                        contentRight="01/01/2000"
                        buttonAction={null}
                    />
                    
                    <SettingItem
                        icon={Flag}
                        title="Country"
                        subtitle={<>You can <a href="#" className="text-blue-600 hover:underline">contact support</a> to update your country</>}
                        contentRight="India"
                        buttonAction={null}
                    />


                    {/* --- LINKED ACCOUNTS --- */}
                    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4 flex-shrink-0">
                                <Link size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Linked accounts</h3>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Connect 3rd party accounts to quickly log in to nomo
                                </p>
                            </div>
                        </div>

                        {/* Facebook Link */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-t border-gray-100">
                            <span className="text-gray-700 font-medium mb-2 sm:mb-0">
                                <span className="mr-2 text-xl inline-block align-middle">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 inline-block text-blue-600"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h3V6h-3a5.22 5.22 0 0 0-5 5v2.5H7.5v4H11v7.5h4v-7.5Z" /></svg>
                                </span>
                                Facebook
                            </span>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">+ Link account</button>
                        </div>
                        
                        {/* Google Link */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-t border-gray-100">
                            <span className="text-gray-700 font-medium mb-2 sm:mb-0">
                                <span className="mr-2 text-xl inline-block align-middle">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 inline-block text-red-500"><path fill="currentColor" d="M22 12c0-.79-.07-1.54-.18-2.28H12v4.32h5.5c-.23 1.15-.84 2.1-1.74 2.76v3.31h4.21c2.44-2.23 3.86-5.58 3.86-9.11Z" /><path fill="currentColor" d="M12 23c3.74 0 6.91-1.25 9.21-3.37l-4.21-3.31c-1.15.76-2.61 1.22-5 1.22-3.83 0-7.04-2.58-8.19-6.08H3v3.29c2.3 4.54 7.02 7.7 11.23 7.7Z" /><path fill="currentColor" d="M3.81 14.54c-.16-.5-.25-1.04-.25-1.54s.09-1.04.25-1.54V8.16H3c-1.73 3.42-1.73 7.58 0 11H3.81Z" /><path fill="currentColor" d="M12 6c2.05 0 3.88.74 5.3 2.16L19.88 4C17.65 1.83 14.97.7 12 .7 7.75.7 4.03 3.86 1.73 8.16l.82 3.29c1.15-3.5 4.36-6.08 8.19-6.08Z" /></svg>
                                </span>
                                Google
                            </span>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">+ Link account</button>
                        </div>
                    </div>

                    {/* --- CLOSE ACCOUNT --- */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-8">
                        <div className="p-3 bg-red-50 text-red-600 rounded-lg mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
                            <Trash2 size={20} />
                        </div>
                        <div className="flex-grow min-w-0 pr-0 sm:pr-4 mb-3 sm:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800">Close account</h3>
                            <p className="text-sm text-gray-500 mt-0.5">
                                If you no longer wish to use nomo, you can permanently close your account
                            </p>
                        </div>
                        <div className="ml-0 sm:ml-auto flex-shrink-0 w-full sm:w-auto">
                            <button
                                onClick={() => openModal('closeAccount')}
                                className="w-full sm:w-auto py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out bg-red-50 text-red-600 hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-300 text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- FOOTER / USER ID / FEEDBACK --- */}
                <div className="text-center mt-8 mb-6">
                    <p className="text-xs text-gray-500 truncate">User id: {USER_ID}</p>
                </div>

                <div className="p-4 sm:p-6 bg-blue-50 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center flex-grow min-w-0">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4 flex-shrink-0">
                            <MessageSquare size={20} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-semibold text-blue-800 truncate">Missing a feature?</h3>
                            <p className="text-sm text-blue-600 mt-0.5 truncate">
                                Let us know what you would like to see on nomo!
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => openModal('leaveFeedback')}
                        className="w-full sm:w-auto py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm"
                    >
                        Leave feedback
                    </button>
                </div>
            </div>

            {/* Render Modals conditionally */}
            {activeModal === 'username' && <CreateUsernameModal onClose={closeModal} />}
            {activeModal === 'email' && <ChangeEmailModal onClose={closeModal} />}
            {activeModal === 'phone' && <ChangePhoneModal onClose={closeModal} />}
            {activeModal === 'changePassword' && <ChangePasswordModal onClose={closeModal} />}
            {activeModal === 'enable2FA' && <Enable2FAModal onClose={closeModal} />}
            {activeModal === 'closeAccount' && <CloseAccountModal onClose={closeModal} />}
            {activeModal === 'mt5Activation' && <MT5ActivationModal onClose={closeModal} />}
            {activeModal === 'leaveFeedback' && <LeaveFeedbackModal onClose={closeModal} />}
        </div>
    );
};

export default App;
