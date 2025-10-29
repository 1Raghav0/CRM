// import React from "react";

// const MyTasksPopup = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const tasks = [
//     { title: "Close your first trade", description: "Close any trade you have opened", completed: false },
//     { title: "Open your first trade", description: "Buy or sell the asset you prefer", completed: false },
//     { title: "Make a first deposit", description: "Top up your account to start trading", completed: false },
//     { title: "Start copying a trader", description: "Choose a lead trader and start copying their trades", completed: false },
//     { title: "Create an account", description: "Register for a free nomo account", completed: true },
//     { title: "Verify your email", description: "", completed: true },
//     { title: "Verify your identity", description: "", completed: true },
//   ];

//   const completedTasks = tasks.filter(t => t.completed).length;
//   const progress = Math.round((completedTasks / tasks.length) * 100);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
//       <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md md:max-w-2xl p-5 relative animate-fadeIn">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-lg"
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <h2 className="text-lg font-semibold mb-1 text-gray-800">My tasks</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           {tasks.length - completedTasks} tasks remaining
//         </p>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
//           <div
//             className="bg-blue-500 h-2.5 rounded-full"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//         <p className="text-right text-sm text-gray-500 mb-4">
//           {progress}% complete
//         </p>

//         {/* Tasks List */}
//         <div className="space-y-3 max-h-[60vh] overflow-y-auto">
//           {tasks.map((task, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition"
//             >
//               <div>
//                 <p className="font-medium text-gray-700">{task.title}</p>
//                 <p className="text-sm text-gray-500">{task.description}</p>
//               </div>
//               {task.completed ? (
//                 <div className="text-green-500 font-bold">✔</div>
//               ) : (
//                 <button className="text-gray-400 hover:text-blue-500">
//                   &gt;
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTasksPopup;



import React from "react";
import { useNavigate } from "react-router-dom";

const MyTasksPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const tasks = [
    { 
      title: "Close your first trade", 
      description: "Close any trade you have opened", 
      completed: false, 
      link: "/portfolio/open" 
    },
    { 
      title: "Open your first trade", 
      description: "Buy or sell the asset you prefer", 
      completed: false, 
      link: "/trading/marketing" 
    },
    { 
      title: "Make a first deposit", 
      description: "Top up your account to start trading", 
      completed: false, 
      link: "/money/deposit" 
    },
    { 
      title: "Start copying a trader", 
      description: "Choose a lead trader and start copying their trades", 
      completed: false, 
      link: "/copy-trading/leaderboard" 
    },
    { 
      title: "Create an account", 
      description: "Register for a free nomo account", 
      completed: true, 
    //   link: "/create-account" 
    },
    { 
      title: "Verify your email", 
      description: "", 
      completed: true, 
    //   link: "/verify-email" 
    },
    { 
      title: "Verify your identity", 
      description: "", 
      completed: true, 
    //   link: "/verify-identity" 
    },
  ];

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

  const handleTaskClick = (link) => {
    navigate(link);
    onClose(); // Close popup after navigation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md md:max-w-2xl p-5 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold mb-1 text-gray-800">My tasks</h2>
        <p className="text-sm text-gray-500 mb-4">
          {tasks.length - completedTasks} tasks remaining
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mb-4">
          {progress}% complete
        </p>

        {/* Tasks List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto">
          {tasks.map((task, index) => (
            <div
              key={index}
              onClick={() => handleTaskClick(task.link)}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition cursor-pointer"
            >
              <div>
                <p className="font-medium text-gray-700">{task.title}</p>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
              {task.completed ? (
                <div className="text-green-500 font-bold">✔</div>
              ) : (
                <span className="text-gray-400 hover:text-blue-500">&gt;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasksPopup;
