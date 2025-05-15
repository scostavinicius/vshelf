import React from "react";
import "./MainInput.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainInput = () => {
	return (
		<div className="input-group">
			<FontAwesomeIcon icon={faMagnifyingGlass} className="input__icon" />
			<input type="text" className="input" placeholder="Search" />
		</div>
	);
};

export default MainInput;
