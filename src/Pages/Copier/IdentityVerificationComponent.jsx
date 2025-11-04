import React, { useState } from 'react';
import { FileText, Check, X, RotateCcw } from 'lucide-react';

// --- Reusable Components ---

// Component for the Step Indicator (Proof of Identity / Liveness Check)
const StepIndicator = ({ label, isActive, isCompleted }) => (
    <div className="flex items-center">
        <div className={`
            w-3 h-3 rounded-full mr-2 flex items-center justify-center
            ${isCompleted ? 'bg-blue-600' : isActive ? 'bg-blue-600' : 'bg-gray-300'}
        `}>
            {isCompleted && <Check size={8} className="text-white" />}
        </div>
        <span className={`
            text-sm font-semibold whitespace-nowrap
            ${isActive ? 'text-blue-600' : isCompleted ? 'text-gray-900' : 'text-gray-500'}
        `}>
            {label}
        </span>
    </div>
);

// Component for the Device Rotation Warning Overlay (Fixed to the entire screen)
const RotateDeviceOverlay = ({ onDismiss }) => (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 bg-gray-900/95 text-white">
        <div className="bg-lime-400 p-4 rounded-full mb-4 shadow-xl">
            <RotateCcw size={40} className="text-gray-900" />
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl text-center">
            <p className="text-xl font-bold mb-2">Please rotate your device</p>
            <p className="text-sm text-gray-300">We support portrait mode only</p>
        </div>
        
        {/* Mock Dismiss Button for Demo */}
        <button 
            onClick={onDismiss}
            className="mt-6 text-sm underline text-red-400 hover:text-red-300"
        >
            Dismiss Warning (Demo Only)
        </button>
    </div>
);


// --- Main Component ---

const IdentityVerificationComponent = () => {
    // 0: Upload Docs, 1: Liveness Check
    const [currentStep, setCurrentStep] = useState(0); 
    // State to simulate the rotation warning
    const [showRotateWarning, setShowRotateWarning] = useState(false); 

    const handleNextStep = () => {
        if (currentStep === 0) {
            setCurrentStep(1);
        } else {
            console.log("Verification flow complete.");
            // In a real app, this would navigate to a success page or close a flow.
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10">
                
                {/* --- Header / Steps --- */}
                <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-8">
                    <StepIndicator 
                        label="Proof of Identity" 
                        isActive={currentStep === 0} 
                        isCompleted={currentStep > 0} 
                    />
                    <div className="w-8 h-px bg-gray-300"></div>
                    <StepIndicator 
                        label="Liveness check" 
                        isActive={currentStep === 1} 
                        isCompleted={false} // Assuming Liveness check is the final step
                    />
                </div>

                {/* --- Central Content --- */}
                <div className="text-center">
                    
                    {/* Central Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
                        <FileText size={32} className="text-blue-600" />
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {currentStep === 0 ? 'Upload your documents' : 'Start Liveness Check'}
                    </h3>
                    <p className="text-sm text-gray-500 mb-8">
                        Please follow the instructions below to complete your identity verification
                    </p>

                    {/* Content Area (Simulated Upload/Camera View) */}
                    <div className="relative bg-gray-100 h-80 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                        {/* Simulated view for the current step */}
                        <div className="text-gray-500 text-center p-4">
                            {currentStep === 0 ? (
                                <div className="p-8">
                                    <FileText size={40} className="mx-auto mb-3" />
                                    <p className="font-semibold mb-1">Drag and drop files here</p>
                                    <p className="text-xs">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                                </div>
                            ) : (
                                <p className="font-semibold text-blue-600">Camera view for liveness check will appear here...</p>
                            )}
                        </div>
                        
                        {/* Device Rotation Warning Overlay (Conditional) */}
                        {showRotateWarning && <RotateDeviceOverlay onDismiss={() => setShowRotateWarning(false)} />}
                    </div>
                </div>

                {/* --- Action Button --- */}
                <div className="mt-8">
                    <button 
                        className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out shadow-lg shadow-blue-500/30"
                        onClick={handleNextStep}
                    >
                        {currentStep === 0 ? 'Continue' : 'Complete Verification'}
                    </button>
                    {/* Mock action to demonstrate the rotation overlay */}
                    <button 
                        className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
                        onClick={() => setShowRotateWarning(!showRotateWarning)}
                    >
                        {showRotateWarning ? 'Hide Rotation Warning (Simulated)' : 'Show Rotation Warning (Simulated)'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main App component for rendering
const App = () => <IdentityVerificationComponent />;

export default App;
