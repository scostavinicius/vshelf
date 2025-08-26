import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MediaPage.css";
import { getMedia } from "../../../services/tmdbApi";
import MediaPageHeader from "./MediaPageHeader/MediaPageHeader";

const MediaPage = () => {
	const { mediaPath, id } = useParams();

	const [media, setMedia] = useState();

	useEffect(() => {
		const fetchMedia = async () => {
			const _media = await getMedia(mediaPath, id);

			setMedia(_media);
		};

		fetchMedia();
	}, [mediaPath, id]);

	console.log(media);

	return (
		<div className="media-page">
			<MediaPageHeader media={media} />
		</div>
	);
};

export default MediaPage;
