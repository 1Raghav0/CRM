import React, { useState, useRef } from "react";

const faqs = [
  {
    question: "What is the nomo AI index?",
    answer:
      "The nomo AI index is an AI-driven investment portfolio that automatically tracks and replicates top-performing traders, allowing users to invest in a diversified and automated way.",
  },
  {
    question: "How does the nomo AI index work?",
    answer:
      "It uses artificial intelligence to analyze the performance of top traders and replicate their strategies, balancing risk and reward through automated trading decisions.",
  },
  {
    question: "Is this the same as copy-trading?",
    answer:
      "Not exactly. While both involve following other traders, the nomo AI index combines multiple leaders into one AI-optimized portfolio, rather than copying a single trader.",
  },
  {
    question: "Why is there a 1 lot limit on investment?",
    answer:
      "The 1 lot limit helps manage risk and maintain fair allocation across all investors using the nomo AI index.",
  },
  {
    question: "How much does it cost to use the nomo AI index?",
    answer:
      "There are no upfront costs. A performance fee applies only when profits are generated, following a high-water mark system.",
  },
  {
    question: "How much balance should I have to invest in nomo AI?",
    answer:
      "You can start with a modest balance. However, having additional funds ensures smoother trade execution and better diversification.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "Returns vary based on market conditions and AI performance. The goal is to achieve steady, lower-risk growth over time.",
  },
  {
    question: "Can I lose money?",
    answer:
      "Yes, as with any investment, there’s always a risk of loss. However, the AI’s diversified approach aims to minimize that risk.",
  },
  {
    question: "Do I need to monitor the index constantly?",
    answer:
      "No, the nomo AI index is fully automated. You can track your performance anytime, but there’s no need for active monitoring.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Single FAQ Item (with smooth animation)
const FAQItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="rounded-lg overflow-hidden transition-all">
      <button
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
      >
        {faq.question}
        <span
          className={`text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden bg-gray-50"
      >
        <div className="px-4 pb-4 pt-2 text-gray-600 text-sm">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
