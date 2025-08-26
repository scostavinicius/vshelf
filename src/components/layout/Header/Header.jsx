import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faBars,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [hidden, setHidden] = useState(false);
	const lastScrollY = useRef(0);

	const [input, setInput] = useState("");
	let navigate = useNavigate();

	useEffect(() => {
		const handleHidden = () => {
			if (window.scrollY > lastScrollY.current) setHidden(true);
			else setHidden(false);

			lastScrollY.current = window.scrollY;
		};

		window.addEventListener("scroll", handleHidden);

		return () => window.removeEventListener("scroll", handleHidden);
	}, []);

	const submit = (e) => {
		e.preventDefault();
		console.log("Input:", input);
		if (input.trim()) {
			navigate(`/search/multi?query=${encodeURIComponent(input)}`);
		}
	};

	return (
		<header className={`std-header ${hidden ? "std-header--hidden" : ""}`}>
			<div className="std-header__drawer-logo">
				{/* <button className="std-header__drawer-btn">
					<FontAwesomeIcon icon={faBars} className="icon" />
				</button> */}

				<Link to={"/"} className="std-header__logo">
					<div className="std-header__logo-icon" />
					<h2 className="notable-regular">
						<span>V</span>Shelf
					</h2>
				</Link>
			</div>

			<form onSubmit={submit} className="std-header__input">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search"
				/>
				<button type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
				</button>
			</form>
			{/* <div>idioma</div> */}
		</header>
	);
};

export default Header;
