import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faStar } from "@fortawesome/free-solid-svg-icons";

import "./BannerCarousel.css";
import Button from "../../common/Button/Button";
import { getMovieGenres, getImageUrl } from "../../../services/tmdbApi";
import { Link } from "react-router-dom";

const BannerCarousel = ({ swiperList }) => {
	const [genresMap, setGenresMap] = useState({});

	useEffect(() => {
		const fetchGenres = async () => {
			const genres = await getMovieGenres();

			const map = {};
			genres.forEach((genre) => {
				map[genre.id] = genre.name;
			});

			setGenresMap(map);
		};

		fetchGenres();
	}, []);

	const movieGenres = (movie) => {
		if (!movie || !movie.genre_ids) return [];
		return movie.genre_ids.map((id) => genresMap[id]);
	};

	return (
		<div className="banner-carousel">
			<Swiper
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={750}
				slidesPerView={1}
				pagination={{
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className}"><span class="bullet-progress"></span></span>`;
					},
				}}
				navigation
				loop={true}
				autoplay={{ delay: 5000 }}
			>
				{swiperList.map((movie) => (
					<SwiperSlide key={movie.id}>
						<img
							className="banner-img"
							src={getImageUrl(movie?.backdrop_path)}
							alt="Banner"
						/>

						<div className="banner-body">
							<h1 className="banner__title nunito-sans-700">{movie?.title}</h1>
							<div className="banner__info">
								<span className="banner__info-genre nunito-sans-500">
									{movieGenres(movie)?.join(", ")}
								</span>
								<span className="banner__info-avaliation nunito-sans-500-medium">
									<span className="avaliation__icon-wrapper">
										<FontAwesomeIcon
											icon={faStar}
											className="avaliation__icon"
										/>
									</span>
									<span className="avaliation__score">
										{movie?.vote_average.toFixed(1)}
									</span>
								</span>
							</div>
							<div className="banner-btn">
								<Button text="Watch Trailer" bgColor="#e0242c" />
								<Link to={`/movie/${movie.id}`}>
									<Button icon={faCircleInfo} bgColor="#777" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default BannerCarousel;
