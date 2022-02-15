import React, { useEffect, useState } from "react";
import "../css/Category.css";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Category({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function loadData() {
      const request = await fetch(fetchUrl);
      const gets = await request.json();
      setmovies(gets.results);
    }
    loadData();
  }, [fetchUrl]);

  const clickHandle = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };
  console.log(movies);
  return (
    <>
      <div className="category">
        <h2>{title}</h2>
        <div className="categories">
          {movies.map((movie) => (
            <img
              onClick={() => clickHandle(movie)}
              key={movie.id}
              className={`posterCategory ${
                isLargeRow && "posterCategoryLarge"
              }`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Category;
