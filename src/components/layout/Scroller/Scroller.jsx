import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Scroller.css";

const Scroller = ({ list, header, renderCard }) => {
	return (
		<div className="scroller">
			<div className="scroller__header">
				<h3 className="nunito-sans-700">{header}</h3>
			</div>

			<Swiper
				modules={[Navigation]}
				slidesOffsetBefore={16}
				slidesOffsetAfter={16}
				loop={true}
				navigation
				breakpoints={{
					0: {
						slidesPerView: 2.5,
						slidesPerGroup: 1,
						spaceBetween: 8,
					},
					768: {
						slidesPerView: 5.5,
						slidesPerGroup: 4,
						spaceBetween: 16,
					},
				}}
			>
				{list.map(
					(media) =>
						renderCard && (
							<SwiperSlide key={media.id}>{renderCard(media)}</SwiperSlide>
						)
				)}
			</Swiper>
		</div>
	);
};

export default Scroller;
