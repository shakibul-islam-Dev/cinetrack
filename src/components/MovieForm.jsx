import React, { useState } from "react";

export default function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    poster: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = "Movie title is required";
    if (!formData.genre) tempErrors.genre = "Please select a genre";

    const yearRegex = /^(19|20)\d{2}$/;
    if (!formData.year) {
      tempErrors.year = "Release year is required";
    } else if (!yearRegex.test(formData.year)) {
      tempErrors.year = "Enter a valid year (e.g., 2024)";
    }

    if (formData.poster && !formData.poster.startsWith("http")) {
      tempErrors.poster = "Poster must be a valid URL";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const defaultPoster =
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500";
      onAddMovie({
        id: Date.now(),
        title: formData.title,
        genre: formData.genre,
        year: formData.year,
        poster: formData.poster.trim() || defaultPoster,
        watched: false,
      });

      setFormData({ title: "", genre: "", year: "", poster: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 p-5 rounded-xl space-y-4 shadow-xl"
    >
      <h3 className="text-lg font-bold text-gray-200 border-b border-gray-800 pb-2">
        Add New Movie
      </h3>

      {/* Title */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
          Title *
        </label>
        <input
          type="text"
          className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
          placeholder="e.g., Interstellar"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title}</p>
        )}
      </div>

      {/* Genre */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
          Genre *
        </label>
        <select
          className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
        </select>
        {errors.genre && (
          <p className="text-red-500 text-xs mt-1">{errors.genre}</p>
        )}
      </div>

      {/* Release Year */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
          Release Year *
        </label>
        <input
          type="text"
          className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
          placeholder="e.g., 2014"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        {errors.year && (
          <p className="text-red-500 text-xs mt-1">{errors.year}</p>
        )}
      </div>

      {/* Poster URL */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
          Poster Image URL
        </label>
        <input
          type="text"
          className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-sm text-gray-100 focus:outline-none focus:border-indigo-500"
          placeholder="https://..."
          value={formData.poster}
          onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
        />
        {errors.poster && (
          <p className="text-red-500 text-xs mt-1">{errors.poster}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors mt-2 shadow-lg shadow-indigo-600/10"
      >
        Add to Watchlist
      </button>
    </form>
  );
}
