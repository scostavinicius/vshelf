import React from "react";
import "./BannerCarousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faImdb } from "@fortawesome/free-brands-svg-icons";

const BannerCarousel = () => {
	return (
		<div className="banner-carousel">
			<div
				className="banner"
				style={{
					backgroundImage: `url("https://seriemaniacos.tv/wp-content/uploads/2020/01/The-Witcher-Netflix-Banner-Header.jpg")`,
				}}
			>
				<div className="banner-content">
					<h1 className="title nunito-sans-700">The Witcher</h1>
					<div className="info">
						<span className="genre nunito-sans-500">Drama, Fantasy</span>
						<span className="avaliation nunito-sans-500">
							<span className="icon-wrapper">
								<FontAwesomeIcon icon={faImdb} className="icon" />
							</span>
							<span className="score">7.9</span>
						</span>
					</div>
					<div className="banner-btn">
						<button className="btn__watch nunito-sans-600">Watch</button>
						<button className="btn__add nunito-sans-600">+</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerCarousel;
