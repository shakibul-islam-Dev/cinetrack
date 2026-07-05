import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieCard from "./components/MovieCard";
import FilterControls from "./components/FilterControls";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: "2010",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
    watched: false,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: "2008",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
    watched: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedMovies = localStorage.getItem("cineTrackMovies");
      if (savedMovies) {
        setMovies(JSON.parse(savedMovies));
      } else {
        setMovies(initialMovies);
        localStorage.setItem("cineTrackMovies", JSON.stringify(initialMovies));
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const updateMoviesAndStorage = (newMovies) => {
    setMovies(newMovies);
    localStorage.setItem("cineTrackMovies", JSON.stringify(newMovies));
  };

  const addMovie = (newMovie) => {
    const updated = [newMovie, ...movies];
    updateMoviesAndStorage(updated);
  };

  const toggleWatched = (id) => {
    const updated = movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie,
    );
    updateMoviesAndStorage(updated);
  };

  const deleteMovie = (id) => {
    const updated = movies.filter((movie) => movie.id !== id);
    updateMoviesAndStorage(updated);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (filterStatus === "Watched") return matchesSearch && movie.watched;
    if (filterStatus === "Unwatched") return matchesSearch && !movie.watched;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="border-b border-gray-800 pb-6 mb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-indigo-500">
            CineTrack
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Manage your personal movie watchlist seamlessly.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <MovieForm onAddMovie={addMovie} />
          </div>

          <div className="lg:col-span-3">
            <FilterControls
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-800 animate-pulse h-80 flex flex-col justify-between"
                  >
                    <div className="bg-gray-800 h-40 rounded-lg w-full mb-4"></div>
                    <div className="h-4 bg-gray-800 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
                    <div className="h-10 bg-gray-800 rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : filteredMovies.length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-gray-900 rounded-xl border border-dashed border-gray-800">
                No movies found. Try adding some!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onToggleWatched={toggleWatched}
                    onDelete={deleteMovie}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
