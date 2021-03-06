import React, { useEffect, useState } from "react";
import endpoints from "../../endPoints";
import "../css/Banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function flexOriginals(){
        const request = await fetch(endpoints.fetchNetflixOriginals);
        const get = await request.json()
        setmovie(get.results[
            Math.floor(Math.random() * get.results.length - 1)
          ])
    }

    flexOriginals();
   
  }, []);
  console.log(movie)

  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
  }

  return <>
  <div
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade"></div>
    </div>
  </>;
}

export default Banner;
