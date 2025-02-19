// import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Progress } from "@/components/ui/progress";

// const milestonesData = [
//   {
//     id: 1,
//     name: "Milestone 1",
//     type: "Release",
//     timePeriod: "18 Feb - 20 Aug",
//     state: "Active",
//     progress: 75,
//     warning: "5 days to expire",
//     subMilestones: [
//       {
//         id: 11,
//         name: "Milestone 1.1",
//         type: "Feature",
//         timePeriod: "15 May - 17 Jun",
//         state: "New",
//         progress: 0,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Milestone 2",
//     type: "Feature",
//     timePeriod: "10 May - 20 Jun",
//     state: "New",
//     progress: 0,
//   },
// ];

// export default function MilestonesDashboard() {
//   const [milestones, setMilestones] = useState(milestonesData);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-semibold">Project XYZ &gt; Milestones</h1>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Milestone</button>
//       </div>
//       <div className="bg-white p-4 rounded shadow-md">
//         <div className="flex gap-4 mb-4">
//           <button className="bg-gray-200 px-4 py-2 rounded">Current Milestones</button>
//           <button className="bg-gray-200 px-4 py-2 rounded">Completed Milestones</button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200 text-left">
//                 <th className="p-2">Milestone</th>
//                 <th className="p-2">Type</th>
//                 <th className="p-2">Time Period</th>
//                 <th className="p-2">State</th>
//                 <th className="p-2">Progress</th>
//               </tr>
//             </thead>
//             <tbody>
//               {milestones.map((milestone) => (
//                 <>
//                   <tr key={milestone.id} className="border-b">
//                     <td className="p-2 font-semibold">{milestone.name} {milestone.warning && <span className="text-red-500">({milestone.warning})</span>}</td>
//                     <td className="p-2">{milestone.type}</td>
//                     <td className="p-2">{milestone.timePeriod}</td>
//                     <td className="p-2">
//                       <span className={`px-2 py-1 rounded text-white ${milestone.state === "Active" ? "bg-green-500" : "bg-yellow-500"}`}>{milestone.state}</span>
//                     </td>
//                     <td className="p-2">
//                       {/* <Progress value={milestone.progress} /> */}
//                     </td>
//                   </tr>
//                   {milestone.subMilestones?.map((sub) => (
//                     <tr key={sub.id} className="border-b bg-gray-50">
//                       <td className="p-2 pl-6">{sub.name}</td>
//                       <td className="p-2">{sub.type}</td>
//                       <td className="p-2">{sub.timePeriod}</td>
//                       <td className="p-2">
//                         <span className="px-2 py-1 rounded text-white bg-yellow-500">{sub.state}</span>
//                       </td>
//                       <td className="p-2">
//                         {/* <Progress value={sub.progress} /> */}
//                       </td>
//                     </tr>
//                   ))}
//                 </>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
import { FaTasks, FaDatabase, FaFlag, FaPlayCircle, FaExclamationCircle, FaUser, FaSignOutAlt } from "react-icons/fa";

const milestonesData = [
  {
    id: 1,
    name: "Milestone 1",
    type: "Release",
    timePeriod: "18 Feb - 20 Aug",
    state: "Active",
    progress: 75,
    warning: "5 days to expire",
    subMilestones: [
      {
        id: 11,
        name: "Milestone 1.1",
        type: "Feature",
        timePeriod: "15 May - 17 Jun",
        state: "New",
        progress: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Milestone 2",
    type: "Feature",
    timePeriod: "10 May - 20 Jun",
    state: "New",
    progress: 0,
  },
];

export default function MilestonesDashboard() {
  const [milestones, setMilestones] = useState(milestonesData);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <FaUser className="text-2xl" />
          <span className="text-lg font-semibold">User Profile</span>
        </div>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded">
            <FaTasks /> Overview
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded">
            <FaDatabase /> Project Repository
          </a>
          <a href="#" className="flex items-center gap-2 p-2 bg-blue-700 rounded">
            <FaFlag /> Milestones
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded">
            <FaPlayCircle /> Runs & Results
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded">
            <FaExclamationCircle /> Issues
          </a>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center gap-2 p-2 bg-red-600 hover:bg-red-700 rounded w-full">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Project XYZ &gt; Milestones</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Milestone</button>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex gap-4 mb-4">
            <button className="bg-gray-200 px-4 py-2 rounded">Current Milestones</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Completed Milestones</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Milestone</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Time Period</th>
                  <th className="p-2">State</th>
                  <th className="p-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((milestone) => (
                  <>
                    <tr key={milestone.id} className="border-b">
                      <td className="p-2 font-semibold">{milestone.name} {milestone.warning && <span className="text-red-500">({milestone.warning})</span>}</td>
                      <td className="p-2">{milestone.type}</td>
                      <td className="p-2">{milestone.timePeriod}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-white ${milestone.state === "Active" ? "bg-green-500" : "bg-yellow-500"}`}>{milestone.state}</span>
                      </td>
                      <td className="p-2">
                        {/* <Progress value={milestone.progress} /> */}
                      </td>
                    </tr>
                    {milestone.subMilestones?.map((sub) => (
                      <tr key={sub.id} className="border-b bg-gray-50">
                        <td className="p-2 pl-6">{sub.name}</td>
                        <td className="p-2">{sub.type}</td>
                        <td className="p-2">{sub.timePeriod}</td>
                        <td className="p-2">
                          <span className="px-2 py-1 rounded text-white bg-yellow-500">{sub.state}</span>
                        </td>
                        <td className="p-2">
                          {/* <Progress value={sub.progress} /> */}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

