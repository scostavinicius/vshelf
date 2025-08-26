import "./BannerCard.css";
import { getImageUrl } from "../../../services/tmdbApi";
import { Link } from "react-router-dom";

const BannerCard = ({ id, bannerUrl, title, type, className }) => {
	return (
		<Link to={`/${type}/${id}`}>
			<div className={`banner-card ${className}`}>
				<img
					src={getImageUrl(bannerUrl)}
					alt={title}
					style={{ borderRadius: "0.5rem", height: "auto" }}
				/>
			</div>
		</Link>
	);
};

export default BannerCard;
