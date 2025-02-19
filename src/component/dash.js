// import { useState } from "react";
// import { Bell, Settings, User, Plus, Filter } from "lucide-react";
// import { Button } from "./components/ui/button";

// export default function dash() {
//   const [activeTab, setActiveTab] = useState("current");

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#1E3A5F] text-white p-4 flex flex-col">
//         <div className="flex items-center mb-6">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//           <span className="text-xl font-bold ml-2">Project XYZ</span>
//         </div>
//         <nav className="flex-1">
//           <ul>
//             <li className="py-2 hover:bg-[#294B6E] rounded px-2">Overview</li>
//             <li className="py-2 bg-[#294B6E] rounded px-2">Milestones</li>
//             <li className="py-2 hover:bg-[#294B6E] rounded px-2">Runs & Results</li>
//             <li className="py-2 hover:bg-[#294B6E] rounded px-2">Issues</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 p-6">
//         {/* Top Panel */}
//         <div className="flex justify-between items-center bg-white p-4 rounded shadow">
//           <div className="flex items-center gap-2">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded">All Projects</button>
//             <button className="px-4 py-2 bg-gray-200 rounded">My Activity</button>
//           </div>
//           <div className="flex items-center gap-4">
//             <Bell className="w-6 h-6 cursor-pointer" />
//             <Settings className="w-6 h-6 cursor-pointer" />
//             <User className="w-8 h-8 rounded-full border cursor-pointer" />
//             <Button variant="destructive">Logout</Button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-4 flex gap-4">
//           <button
//             className={`px-4 py-2 rounded ${activeTab === "current" ? "bg-gray-300" : "bg-gray-200"}`}
//             onClick={() => setActiveTab("current")}
//           >
//             Current Milestones
//           </button>
//           <button
//             className={`px-4 py-2 rounded ${activeTab === "completed" ? "bg-gray-300" : "bg-gray-200"}`}
//             onClick={() => setActiveTab("completed")}
//           >
//             Completed Milestones
//           </button>
//         </div>

//         {/* Search & Add Milestone */}
//         <div className="mt-4 flex justify-between items-center">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search test case"
//               className="border px-4 py-2 rounded w-80"
//             />
//             <Button className="ml-2">
//               <Filter className="w-5 h-5" /> Filter
//             </Button>
//           </div>
//           <Button className="bg-blue-500 text-white flex items-center">
//             <Plus className="w-5 h-5 mr-2" /> Add Milestone
//           </Button>
//         </div>

//         {/* Milestones Table */}
//         <div className="bg-white p-4 rounded shadow mt-4">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-2">Milestone</th>
//                 <th className="p-2">Type</th>
//                 <th className="p-2">Time Period</th>
//                 <th className="p-2">State</th>
//                 <th className="p-2">Progress</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2">Milestone 1 <span className="text-red-500">5 days to expire</span></td>
//                 <td className="p-2">Release</td>
//                 <td className="p-2">18 Feb - 20 Aug</td>
//                 <td className="p-2 text-green-600">Active</td>
//                 <td className="p-2">75%</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2">Milestone 1.1</td>
//                 <td className="p-2">Feature</td>
//                 <td className="p-2">15 May - 17 Jun</td>
//                 <td className="p-2 text-yellow-500">New</td>
//                 <td className="p-2">0%</td>
//               </tr>
//               <tr>
//                 <td className="p-2">Milestone 2</td>
//                 <td className="p-2">Feature</td>
//                 <td className="p-2">10 May - 20 Jun</td>
//                 <td className="p-2 text-yellow-500">New</td>
//                 <td className="p-2">0%</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
