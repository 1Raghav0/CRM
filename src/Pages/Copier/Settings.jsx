import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MessageSquare, Monitor, X, Check } from 'lucide-react';

// List of available languages (for the custom dropdown)
const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

// Reusable component for displaying individual settings
const SettingItem = ({ icon: Icon,title, subtitle, contentRight, iconColorClass }) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
        <div className={`p-3 ${iconColorClass} rounded-lg mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0`}>
            <Icon size={24} />
        </div>
        <div className="flex-grow min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
            {contentRight}
        </div>
    </div>
);

// Custom Language Dropdown Component
const LanguageDropdown = ({ selectedLanguage, onSelectLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selected = availableLanguages.find(lang => lang.code === selectedLanguage);
    const ref = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (code) => {
        onSelectLanguage(code);
        setIsOpen(false);
    };

    return (
        <div ref={ref} className="relative w-full sm:w-40 md:w-56">
            <button
                onClick={handleToggle}
                className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-500 transition duration-150"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="flex items-center text-gray-800 font-medium truncate">
                    <span className="mr-2 text-xl">{selected.flag}</span>
                    <span className="truncate">{selected.name}</span>
                </span>
                <ChevronDown size={20} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    role="listbox"
                    aria-activedescendant={selectedLanguage}
                    className="absolute left-0 right-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-20 max-h-56 overflow-auto"
                >
                    {availableLanguages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            role="option"
                            aria-selected={lang.code === selectedLanguage}
                            className={`w-full text-left flex items-center p-3 text-sm transition-colors duration-100 ${
                                lang.code === selectedLanguage
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            <span className="mr-2 text-xl">{lang.flag}</span>
                            <span className="truncate">{lang.name}</span>
                            {lang.code === selectedLanguage && <Check size={16} className="ml-auto" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


// MT5 Deposit Modal Component
const DepositModal = ({ onClose }) => {
    // Placeholder image for the bonus icon
    const bonusImageUrl = "https://placehold.co/100x60/808080/ffffff?text=50%25+BONUS"; 
    
    // Placeholder image for the payment methods icon
    const methodsImageUrl = "https://placehold.co/150x40/f8f8f8/1f2937?text=Crypto+UPI+Visa"; 

    return (
        // Modal Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-opacity duration-300">
            
            {/* Modal Container: full screen on xs, centered card on sm+ */}
            <div className="relative w-full h-full sm:h-auto max-h-screen sm:max-w-lg bg-white rounded-none sm:rounded-3xl shadow-2xl p-4 sm:p-10 transform transition-all duration-300 overflow-y-auto">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition duration-150 bg-white/80 sm:bg-transparent"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="max-w-xl mx-auto text-center">
                    {/* Header Icon (Mockup uses a complex icon, using a simple placeholder here) */}
                    <div className="mx-auto w-20 h-20 flex flex-col items-center justify-center mb-6">
                        {/* Recreating the look of the stacked coins/badge icon */}
                        <div className="relative">
                            <img 
                                src="https://placehold.co/70x70/ffe392/e53e3e?text=MT5" 
                                alt="MT5 Icon" 
                                className="rounded-full shadow-lg"
                            />
                            <span className="absolute -top-1 -right-1 text-xs font-bold bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">5</span>
                        </div>
                    </div>

                    {/* Title and Subtitle */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Deposit to activate MT5</h2>
                    <p className="text-sm text-gray-500 mt-1 mb-6 sm:mb-8">
                        Make a deposit to your account to receive the MetaTrader5 credentials
                    </p>

                    {/* Deposit Methods Card */}
                    <div className="p-4 bg-gray-50 rounded-xl mb-4 border border-gray-100">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                            <p className="font-semibold text-gray-700">7+ deposit methods</p>
                            <img 
                                src={methodsImageUrl} 
                                alt="Payment methods" 
                                className="h-6 object-contain"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x40/CCCCCC/000000?text=Methods" }}
                            />
                        </div>
                    </div>

                    {/* Bonus Card */}
                    <div className="p-4 bg-gray-50 rounded-xl mb-6 sm:mb-8 border border-gray-100">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-left gap-4">
                            <div className="text-left">
                                <p className="font-semibold text-gray-700">Deposit today to get a 50% bonus</p>
                                <p className="text-xs text-gray-500">Participate in our limited promotion</p>
                            </div>
                            <img 
                                src={bonusImageUrl} 
                                alt="50% Bonus" 
                                className="h-12 w-20 object-contain"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x48/CCCCCC/000000?text=Bonus" }}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={() => console.log('Deposit Now clicked')}
                            className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Deposit now
                        </button>

                        <button
                            onClick={onClose}
                            className="w-full py-3 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Main Application Component
const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">Account Settings</h1>
                
                <div className="space-y-4">
                    
                    {/* Language Section */}
                    <SettingItem
                        icon={MessageSquare}
                        title="Language"
                        subtitle="Your default interface language"
                        iconColorClass="bg-blue-50 text-blue-600"
                        contentRight={
                            <div className="w-full sm:w-auto">
                                <LanguageDropdown 
                                    selectedLanguage={selectedLanguage}
                                    onSelectLanguage={setSelectedLanguage}
                                />
                            </div>
                        }
                    />

                    {/* MT5 Credentials Section */}
                    <SettingItem
                        icon={Monitor}
                        title="MT5 credentials"
                        subtitle="Trade directly on MetaTrader 5 platform using your nomo account"
                        iconColorClass="bg-blue-50 text-blue-600"
                        contentRight={
                            <div className="w-full sm:w-auto">
                                <button
                                    onClick={() => setIsDepositModalOpen(true)}
                                    className="w-full sm:w-auto py-2 px-4 rounded-lg font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition duration-150 ease-in-out whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    View details
                                </button>
                            </div>
                        }
                    />
                    
                </div>
            </div>

            {/* Render Modal conditionally */}
            {isDepositModalOpen && (
                <DepositModal onClose={() => setIsDepositModalOpen(false)} />
            )}
        </div>
    );
};

export default App;
