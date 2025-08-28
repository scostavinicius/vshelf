import { useEffect, useState } from "react";

import "./Home.css";
import { getMovieList, getTvList } from "../../services/tmdbApi";
import BannerCarousel from "../../components/layout/BannerCarousel/BannerCarousel";
import Scroller from "../../components/layout/Scroller/Scroller";
import Header from "../../components/layout/Header/Header";
import PosterCard from "../../components/cards/PosterCard/PosterCard";

function Home() {
	const [nowPlaying, setNowPlaying] = useState([]);
	const [moviePopular, setMoviePopular] = useState([]);
	const [movieTopRated, setMovieTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);

	const [swiperList, setSwiperList] = useState([]);

	const [airingToday, setAiringToday] = useState([]);
	const [onTheAir, setOnTheAir] = useState([]);
	const [tvPopular, setTvPopular] = useState([]);
	const [tvTopRated, setTvTopRated] = useState([]);

	useEffect(() => {
		const fetchLists = async () => {
			const [
				_nowPlaying,
				_moviePopular,
				_movieTopRated,
				_upcoming,
				_airingToday,
				_onTheAir,
				_tvPopular,
				_tvTopRated,
			] = await Promise.all([
				getMovieList("now_playing"),
				getMovieList("popular"),
				getMovieList("top_rated"),
				getMovieList("upcoming"),
				getTvList("airing_today"),
				getTvList("on_the_air"),
				getTvList("popular"),
				getTvList("top_rated"),
			]);

			console.log(_moviePopular);

			setNowPlaying(_nowPlaying);
			setMoviePopular(_moviePopular);
			setMovieTopRated(_movieTopRated);
			setUpcoming(_upcoming);
			setSwiperList(_nowPlaying.slice(0, 10));

			console.log(_tvTopRated);

			setAiringToday(_airingToday);
			setOnTheAir(_onTheAir);
			setTvPopular(_tvPopular);
			setTvTopRated(_tvTopRated);
		};

		fetchLists();
	}, []);

	return (
		<div className="layout">
			<div className="content">
				<Header />

				<div className="content-container">
					<BannerCarousel
						movieListName="popular"
						swiperList={swiperList}
						className="home-banner"
					/>

					<div className="feed-wrapper">
						<Scroller
							list={nowPlaying}
							header="Now Playing"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="movie"
								/>
							)}
						/>
						<Scroller
							list={moviePopular}
							header="Popular Movies"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="movie"
								/>
							)}
						/>
						<Scroller
							list={movieTopRated}
							header="Top Rated Movies"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="movie"
								/>
							)}
						/>
						<Scroller
							list={upcoming}
							header="Upcoming"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="movie"
								/>
							)}
						/>

						<Scroller
							list={airingToday}
							header="Airing Today"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title || media.name}
									type="tv"
								/>
							)}
						/>
						<Scroller
							list={onTheAir}
							header="On The Air"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="tv"
								/>
							)}
						/>
						<Scroller
							list={tvPopular}
							header="Popular on TV"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="tv"
								/>
							)}
						/>
						<Scroller
							list={tvTopRated}
							header="Top Rated on TV"
							renderCard={(media) => (
								<PosterCard
									key={media.id}
									id={media.id}
									posterUrl={media.poster_path}
									title={media.title}
									type="tv"
								/>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
