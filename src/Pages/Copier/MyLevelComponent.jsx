import { useState } from 'react';
import { useRef } from "react";
import { Plus, BarChart2, TrendingUp, Check, Info, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const loyaltyLevels = [
    { name: 'Starter', color: 'bg-blue-600', deposit: '0' },
    { name: 'Bronze', color: 'bg-orange-600', deposit: '250', cap: '200' },
    { name: 'Silver', color: 'bg-gray-400', deposit: '1,000', cap: '800' },
    { name: 'Gold', color: 'bg-yellow-500', deposit: '5,000', cap: '4,000' },
    { name: 'Diamond', color: 'bg-cyan-500', deposit: '20,000', cap: '16,000' },
    { name: 'Crystal black', color: 'bg-black', deposit: '50,000', cap: '40,000' },
];


const BenefitCell = ({ content }) => {
    if (content === '✓') {
        return <Check size={20} className="text-green-500 mx-auto" />;
    }
    if (content === '-') {
        return <span className="text-gray-400">-</span>;
    }
    return <span className="text-sm text-gray-700 whitespace-nowrap">{content}</span>;
};


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300">
            <button
                className="flex w-full items-center justify-between px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-left leading-snug">{question}</span>
                <ChevronDown 
                    size={24} 
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                />
            </button>
            {isOpen && (
                <div className="px-4 pb-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100/50">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

// Main Component
const MyLevelComponent = () => {
    const navigate = useNavigate();
    const gotoDeposit = () => navigate("/money/deposit");

        const tableRef = useRef(null);

        const handleScrollToTable = () => {
    tableRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    };
    // Defines the rows for the comparison table
    const benefitRows = [
        { label: 'Net deposits, $', data: loyaltyLevels.map(l => (
            <span key={l.name} className="flex items-center justify-center">
                {l.deposit}
                {l.cap && (
                    <span className="text-xs text-gray-500 ml-1 flex items-center">
                        <span className="text-red-500 mr-0.5">({l.cap}</span>
                        <Info size={12} className="text-gray-400 cursor-pointer hover:text-gray-600" title={`Insurance buffer: $${l.cap}`} />
                        <span className="text-red-500">)</span>
                    </span>
                )}
            </span>
        )) },
        { label: 'Welcome bonus 50%', data: ['✓', '✓', '✓', '✓', '✓', '✓'] },
        { label: 'Withdrawal fee', data: ['5$', '4$', '3$', '2$', '1$', '0$'] },
        { label: 'Spread', data: [
            <span key="s1" className="text-gray-500 text-sm flex items-center justify-center">Standard spread <Info size={12} className="ml-1 text-gray-400" /></span>,
            <span key="s2" className="text-gray-500 text-sm flex items-center justify-center">Standard spread <Info size={12} className="ml-1 text-gray-400" /></span>,
            <span key="s3" className="text-gray-500 text-sm">Low spread</span>,
            <span key="s4" className="text-yellow-600 text-sm">Extra-low spread</span>,
            <span key="s5" className="text-cyan-600 text-sm">Minimum spread</span>,
            <span key="s6" className="text-black text-sm">Minimum spread</span>
        ] },
        { label: 'Max leaders to copy', data: ['1', '3', '10', 'unlimited', 'unlimited', 'unlimited'] },
        { label: 'nomoGPT questions, monthly', data: ['5', '25', '50', '200', '500', 'unlimited'] },
        { label: 'Training course', data: ['1 lesson', 'full access', 'full access', 'full access', 'full access', 'full access'] },
        { label: 'Profitable investments simulator', data: ['-', '✓', '✓', '✓', '✓', '✓'] },
        { label: 'Lot calculator', data: ['-', '✓', '✓', '✓', '✓', '✓'] },
        { label: 'Ninja RSI trading system', data: ['-', '-', '✓', '✓', '✓', '✓'] },
        { label: 'ESCOBAR trading bot', data: ['-', '-', '-', '✓', '✓', '✓'] },
        { label: 'Personal trading performance plan', data: ['-', '-', '✓', '✓', '✓', '✓'] },
        { label: 'One-on-one tutoring', data: ['-', '-', '✓', '✓', '✓', '✓'] },
    ];

    // Data for the FAQ section
    const faqData = [
        { question: "What are user levels?", answer: "User levels are part of our loyalty program designed to reward active customers with VIP benefits. Your level determines the perks you receive, such as reduced fees and access to exclusive tools." },
        { question: "How do I get a level?", answer: "Your user level is determined by your net deposit, which is calculated as (Total Deposits - Total Withdrawals). When your net deposit crosses a threshold, you automatically move up to the next level." },
        { question: "How long does my level last for?", answer: "Your level lasts as long as your net deposit remains above the level's insurance buffer threshold. This buffer ensures you maintain your benefits even with minor temporary drops in your net deposit amount." },
        { question: "What kind of benefits may I get?", answer: "Benefits include reduced withdrawal fees, better spreads, access to trading courses, trading tools like Lot and Ninja RSI calculators, and personalized support like one-on-one tutoring." },
        { question: "When does my level get updated?", answer: "Levels are generally updated in real-time or near real-time as your net deposits change, ensuring you get access to benefits as soon as you qualify." },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">My level</h1>
                <p className="text-gray-600 mb-8">
                    Check out your current level and learn more about the benefits you can get with our loyalty program
                </p>

                {/* Current Level Card (Unchanged) */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                <BarChart2 size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Current level</h2>
                                <p className="text-2xl font-bold text-gray-900">Starter</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm font-semibold"
                            onClick={handleScrollToTable}>
                                View benefits
                            </button>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                            onClick={gotoDeposit}>
                                <Plus size={18} className="mr-1" /> Deposit
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">My net deposit 0</p>

                    {/* Progress Bar Section (Unchanged) */}
                    <div className="bg-gray-100 rounded-full h-2.5 mt-4 relative mb-12">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-1 w-2 h-2 rounded-full bg-blue-600 z-10"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 ml-1.5 p-1 px-2 text-xs font-medium bg-blue-600 text-white rounded-full whitespace-nowrap">
                            Starter
                        </div>
                        <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: '0%' }}
                        ></div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-1 w-2 h-2 rounded-full bg-orange-400 z-10"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-1.5 p-1 px-2 text-xs font-medium bg-orange-400 text-white rounded-full whitespace-nowrap">
                            Bronze
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700 mt-8 whitespace-nowrap">
                            Deposit 250.00 $ to reach bronze level
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 text-sm text-gray-500 mt-8 whitespace-nowrap">
                            My net deposit 0
                        </div>
                    </div>
                </div>

                {/* How it works section (Unchanged) */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">How it works</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We have built a loyalty program to reward our most active customers and let them enjoy multiple VIP benefits.
                        Your level depends on the amount of net deposits that you made to your account (all deposits minus all
                        withdrawals). When you reach a certain level, you also get an insurance buffer that lets you keep the current
                        level even if your net deposit temporarily drops a little under the minimum threshold.
                    </p>
                    <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg p-4 relative overflow-hidden">
                        <div className="text-center text-xl font-semibold text-blue-700 z-10">
                            <p className="text-2xl md:text-3xl text-blue-700 relative">
                                Net deposit = total deposits - total withdrawals
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xl md:text-2xl whitespace-nowrap">Your level ↗</span>
                            </p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-300 text-6xl opacity-20 select-none">Illustration</span>
                        </div>
                    </div>
                </div>
                
                {/* --- LOYALTY PROGRAM BENEFITS TABLE (Unchanged) --- */}
                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200 overflow-x-auto mb-8"
                ref={tableRef}>
                    <div className="min-w-[1000px]">
                        {/* Table Header (Levels) */}
                        <div className="grid grid-cols-[300px_repeat(6,minmax(0,1fr))] border-b border-gray-200 pb-3 mb-3">
                            <div className="text-base font-bold text-gray-900 px-4 pt-3">Loyalty Level</div>
                            {loyaltyLevels.map((level, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <div className={`p-2 rounded-full ${level.color} flex items-center justify-center mb-1`}>
                                        <TrendingUp size={20} className="text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">{level.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Table Rows (Benefits) */}
                        {benefitRows.map((row, rowIndex) => (
                            <div key={rowIndex} className={`grid grid-cols-[300px_repeat(6,minmax(0,1fr))] py-3 ${rowIndex % 2 === 0 ? 'bg-gray-50 rounded-lg' : ''} items-center`}>
                                {/* Label Column */}
                                <div className="text-sm text-gray-700 font-medium px-4">{row.label}</div>
                                
                                {/* Data Columns */}
                                {row.data.map((content, colIndex) => (
                                    <div key={colIndex} className="flex items-center justify-center text-center px-2">
                                        <BenefitCell content={content} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* --- END LOYALTY PROGRAM BENEFITS TABLE --- */}

                {/* --- FAQ SECTION (NEW) --- */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
                <div className="flex flex-col gap-3">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    ))}
                </div>
                {/* --- END FAQ SECTION --- */}
            </div>
        </div>
    );
};

export default MyLevelComponent;
