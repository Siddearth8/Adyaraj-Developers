
export default function OurNetwork() {
  const jointVentures = [
    "SUPER ADYARAJ CONSTRUCTION COMPANY JV",
    "ADYARAJ MACRO RANJAN CON JV",
    "SAM INDIA ADYARAJ JV",
    "SHANTI ADYARAJ JV",
  ];

  const plantMachinery = [
    "SCAFOLDING",
    "WATER TANK",
    "TRANSIT MIXER",
    "CONCRETE PUMP",
    "GENERATORS SETS",
    "CONCRETE MIXER",
    "SELF LOADER",
    "POWER DRIVEN EARTH RAMMER",
    "FULLY EQUIPPED QC LAB",
    "FABRICATION EQUIPMENT",
    "SHUTTERING PLATE, SPANNER & JACKS",
    "TOWER HOIST WITH WINCH MACHINE",
    "POCLAIN, DUMPER, TRACTOR & LOADER",
    "BATCHING PLANT ELECTRICALLY OPERATED",
    "SURVEY EQUIPMENT WITH TOATAL STATION",
    "COMPRESSOR WITH BREAKERS & JACK HAMMERS",
  ];

  const strengths = [
    { team: "Administrator & Management", members: 7 },
    { team: "Accounts & Finance", members: 11 },
    { team: "Engineers", members: 25 },
    { team: "Supervisors", members: 41 },
    { team: "Foreman & Electrician", members: 14 },
    { team: "Operators & Mechanics", members: 30 },
    { team: "Marketing & Stores", members: 18 },
    { team: "Care Taker & Watchman", members: 20 },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-15xl py-20 px-6 space-y-12">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        Our Network
      </h1>

      {/* Joint Ventures Section */}
      <section className="p-8 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur shadow-lg border border-gray-200-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">OUR NETWORK OF JOINT VENTURES</span>
        </h2>

        <div className="space-y-4">
          {jointVentures.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gradient-to-r from-green-200 to-blue-300 p-4 rounded-full shadow-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-700 font-bold">
                {index + 1}
              </div>
              <span className="font-bold text-gray-900">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Plant & Machinery Section */}
      <section className="p-8 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur shadow-lg border border-gray-200-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700">PLANT & MACHINERY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plantMachinery.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gradient-to-r from-green-200 to-blue-300 p-4 rounded-full shadow-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-700 font-bold">
                {index + 1}
              </div>
              <span className="font-bold text-gray-900">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Strength Section */}
      <section className="p-8 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur shadow-lg border border-gray-200-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">OUR STRENGHT</span>
        </h2>

        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-blue-200 text-gray-900 font-semibold">
              <th className="p-3 border">Sr. No.</th>
              <th className="p-3 border">Name of Team</th>
              <th className="p-3 border">Members</th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 text-black">
            {strengths.map((row, index) => (
              <tr key={index} className="border">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{row.team}</td>
                <td className="p-3 border">{row.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}


