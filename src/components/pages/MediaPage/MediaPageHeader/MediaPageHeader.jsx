import "./MediaPageHeader.css";
import { getImageUrl } from "../../../../services/tmdbApi";
import CircleProgress from "../../../common/CircleProgress/CircleProgress";
import Header from "../../../layout/Header/Header";

function minutesToHours(minutes) {
	return `${parseInt(minutes / 60)}h ${minutes % 60}m`;
}

const MediaPageHeader = ({ media }) => {
	if (!media) return null;

	const title = media.title || media.name;
	const releaseDate = media.release_date || media.first_air_date;
	const backdropPath = media?.backdrop_path;
	const posterPath = media?.poster_path;
	const genres = media?.genres;
	const voteAverage = media?.vote_average;
	const tagline = media?.tagline;
	const overview = media?.overview;

	let size;
	if (media?.runtime) {
		size = minutesToHours(media?.runtime);
	} else {
		size = `${media?.number_of_seasons} temporadas, ${media?.number_of_episodes} episódios`;
	}

	console.log(media);

	return (
		<div className="mp-header-wrapper">
			<Header />

			<header className="mp-header">
				<div
					className="mp-header__bg"
					style={{ backgroundImage: `url(${getImageUrl(backdropPath)})` }}
				/>

				<div className="mp-header__poster-wrapper">
					<img src={getImageUrl(posterPath)} alt="" />
				</div>
				<div className="mp-header__info">
					<h1>{title}</h1>
					<ul>
						<li>{releaseDate.split("-").reverse().join("/")}</li>
						<li>{genres.map((id) => id.name).join(", ")}</li>
						<li>{size}</li>
					</ul>

					<CircleProgress value={voteAverage} />

					<p className="mp-header__info-tagline">{tagline}</p>
					<h2>Sinopse</h2>
					<p className="mp-header__info-overview">{overview}</p>
				</div>
			</header>
		</div>
	);
};

export default MediaPageHeader;
