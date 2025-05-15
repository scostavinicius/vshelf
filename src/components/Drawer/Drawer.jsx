import React from "react";
import "./Drawer.css";
import DrawerGroup from "../DrawerGroup/DrawerGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faHeart as faHeartSolid,
	faCalendar as faCalendarSolid,
	faClock as faClockSolid,
	faUser as faUserSolid,
	faUsers,
	faGear,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// import {
// 	faHeart as faHeartRegular,
// 	faCalendar as faCalendarRegular,
// 	faClock as faClockRegular,
// 	faUser as faUserRegular,
// } from "@fortawesome/free-regular-svg-icons";

const Drawer = () => {
	const itemsGroupMenu = [
		{ label: "Home", icon: <FontAwesomeIcon icon={faHouse} /> },
		{ label: "Watch List", icon: <FontAwesomeIcon icon={faHeartSolid} /> },
		{
			label: "Coming Soon",
			icon: <FontAwesomeIcon icon={faCalendarSolid} />,
		},
		{
			label: "Discovery",
			icon: <FontAwesomeIcon icon={faClockSolid} />,
		},
	];
	const itemsGroupSocial = [
		{ label: "Friends", icon: <FontAwesomeIcon icon={faUserSolid} /> },
		{
			label: "Parties",
			icon: <FontAwesomeIcon icon={faUsers} />,
		},
	];
	const itemsGroupGeneral = [
		{ label: "Settings", icon: <FontAwesomeIcon icon={faGear} /> },
		{
			label: "Log Out",
			icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
		},
	];

	return (
		<aside className="drawer">
			<img src="/netflix-svgrepo-com.svg" alt="" className="drawer__logo" />

			<div className="drawer__groups">
				<DrawerGroup title="MENU" items={itemsGroupMenu} />
				<DrawerGroup title="SOCIAL" items={itemsGroupSocial} />
				<DrawerGroup title="GENERAL" items={itemsGroupGeneral} />
			</div>
		</aside>
	);
};

export default Drawer;
