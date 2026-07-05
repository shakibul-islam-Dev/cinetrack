import React from "react";

export default function MovieCard({ movie, onToggleWatched, onDelete }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md flex flex-col group hover:border-gray-700 transition-all duration-300">
      <div className="relative h-48 bg-gray-950 overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500";
          }}
        />

        {movie.watched && (
          <span className="absolute top-3 right-3 bg-green-500/90 text-gray-950 text-[10px] uppercase tracking-widest font-extrabold py-1 px-2.5 rounded-full shadow-lg backdrop-blur-sm">
            Watched
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-medium bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md">
              {movie.genre}
            </span>
            <span className="text-[11px] font-medium bg-gray-800/50 text-gray-500 px-2 py-0.5 rounded-md">
              {movie.year}
            </span>
          </div>
          <h4
            className="text-base font-bold text-gray-100 truncate mt-1"
            title={movie.title}
          >
            {movie.title}
          </h4>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center gap-2">
          <button
            onClick={() => onToggleWatched(movie.id)}
            className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg border transition-all ${
              movie.watched
                ? "bg-transparent border-gray-800 text-gray-400 hover:bg-gray-800"
                : "bg-indigo-600/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            {movie.watched ? "Mark Unwatched" : "Mark Watched"}
          </button>

          <button
            onClick={() => onDelete(movie.id)}
            className="p-2 text-xs font-semibold rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
            title="Delete Movie"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
