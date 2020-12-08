import React from 'react';
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App"
    style={{backgroundColor: "#111"}}>
      <Nav/>
      <Banner/>
      <h1>
        NETFLIX
        
      </h1>
      <Row 
      title ="NETFLIX ORIGINALS" 
      fetchUrl ={requests.fetchNetflixOriginals}
      isLargeRow={true} 
      />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title = "Documantaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
