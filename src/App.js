import React from 'react';
import requests from './requests'
import './App.css';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
function App() {

	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				tittle="NETFLIX ORGINALS"
				fetchUrl={requests.fetchNetflixOrginal}
				isLargeRow />
			<Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
			<Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
