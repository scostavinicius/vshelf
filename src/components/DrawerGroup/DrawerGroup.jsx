import React from "react";
import "./DrawerGroup.css";

const DrawerGroup = ({ title, items }) => {
	return (
		<div className="group-container">
			<h6 className="group__title open-sans-600">{title}</h6>
			<div className="group__list">
				{items.map((item, index) => (
					<div key={index} className="group__item">
						<div className="item__left-border"></div>
						<span className="item__icon">{item.icon}</span>
						<span className="item__label nunito-sans-500">{item.label}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default DrawerGroup;
