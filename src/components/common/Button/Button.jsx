import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.css";

const Button = ({ text, icon, bgColor }) => {
	return (
		<button
			className="common-btn nunito-sans-600"
			style={{ backgroundColor: bgColor }}
		>
			{icon && <FontAwesomeIcon icon={icon} className="common-btn__icon" />}
			{text && <span className="common-btn__text">{text}</span>}
		</button>
	);
};

export default Button;
