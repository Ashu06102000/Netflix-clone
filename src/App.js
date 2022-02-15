import "./App.css";
import React from "react";
import  endpoints  from "./endPoints";
import Category from "./Component/js/Category";
import Navbar from "./Component/js/Navbar";
import Banner from "./Component/js/Banner";
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
      <Category
        title="NETFLIX ORIGINALS"
        fetchUrl={endpoints.fetchNetflixOriginals}
        isLargeCategory
      />
      <Category title="TRENDING NOW" fetchUrl={endpoints.fetchTrending} />
      <Category title="TOP RATED MOVIES" fetchUrl={endpoints.fetchTopRated} />
      <Category title="ACTION MOVIES" fetchUrl={endpoints.fetchActionMovies} />
      <Category title="COMEDY MOVIES" fetchUrl={endpoints.fetchComedyMovies} />
      <Category title="HORROR MOVIES" fetchUrl={endpoints.fetchHorrorMovies} />
      <Category
        title="ROMANCE MOVIES"
        fetchUrl={endpoints.fetchRomanceMovies}
      />
      <Category title="DOCUMENTRIES" fetchUrl={endpoints.fetchDocumentaries} />
    </>
  );
}

export default App;
