import "./SearchPage.css";
import {
	getMovieSearch,
	// getMultiSearch,
	getTvSearch,
} from "../../../services/tmdbApi";
import Header from "../../layout/Header/Header";
import PosterCard from "../../cards/PosterCard/PosterCard";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const query = queryParams.get("query") || "";

	const [movies, setMovies] = useState([]);
	const [tv, setTv] = useState([]);

	useEffect(() => {
		const fetchSearch = async () => {
			let moviePages = 1;
			let tvPages = 1;
			const maxPages = 5;

			let movieResults = [];
			let tvResults = [];
			const minResults = 20;

			while (movieResults < minResults && moviePages <= maxPages) {
				const movieSearch = await getMovieSearch(query, moviePages);

				const movieSearchFiltered = movieSearch.filter((m) => m.poster_path);

				movieResults = [...movieResults, ...movieSearchFiltered];
				moviePages++;
			}

			while (tvResults < minResults && tvPages <= maxPages) {
				const tvSearch = await getTvSearch(query, tvPages);

				const tvSearchFiltered = tvSearch.filter((tv) => tv.poster_path);

				tvResults = [...tvResults, ...tvSearchFiltered];
				tvPages++;
			}

			setMovies(movieResults);
			setTv(tvResults);
		};

		fetchSearch();
	}, [query]);

	console.log(movies);
	console.log(tv);

	return (
		<div className="search-page">
			<Header />

			<div className="spacer" style={{ height: "7rem" }} />

			<h1>Results for "{query}"</h1>

			{movies && (
				<div className="search-page__media-wrapper">
					<h2>
						Movies <span>({movies.length})</span>
					</h2>

					<div className="search-page__media">
						{movies.map((movie) => (
							<PosterCard
								key={movie?.id}
								id={movie?.id}
								posterUrl={movie?.poster_path}
								title={movie?.title}
								type="movie"
								className="search-page__card"
							/>
						))}
					</div>
				</div>
			)}

			{tv && (
				<div className="search-page__media-wrapper">
					<h2>
						TV <span>({tv.length})</span>
					</h2>

					<div className="search-page__media">
						{tv.map((serie) => (
							<PosterCard
								key={serie?.id}
								id={serie?.id}
								posterUrl={serie?.poster_path}
								title={serie?.title}
								type="tv"
								className="search-page__card"
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchPage;
