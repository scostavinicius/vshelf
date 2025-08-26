import "./PosterCard.css";
import { getImageUrl } from "../../../services/tmdbApi";
import { Link } from "react-router-dom";

const PosterCard = ({ id, posterUrl, title, type, className }) => {
	return (
		<Link to={`/${type}/${id}`}>
			<div className={`poster-card ${className}`}>
				<img
					src={getImageUrl(posterUrl)}
					alt={title}
					style={{ borderRadius: "0.5rem", height: "auto" }}
				/>
			</div>
		</Link>
	);
};

export default PosterCard;
