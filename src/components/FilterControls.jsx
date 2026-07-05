import React from "react";

export default function FilterControls({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  const tabs = ["All", "Watched", "Unwatched"];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-gray-900 border border-gray-800 p-4 rounded-xl shadow-md">
      <div className="flex-1 max-w-md relative">
        <input
          type="text"
          className="w-full bg-gray-950 border border-gray-800 rounded-lg pl-3 pr-10 py-2 text-sm text-gray-100 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
          placeholder="Search movies by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-xs"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center bg-gray-950 p-1 rounded-lg border border-gray-800/80">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilterStatus(tab)}
            className={`text-xs font-medium py-1.5 px-4 rounded-md transition-all ${
              filterStatus === tab
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
