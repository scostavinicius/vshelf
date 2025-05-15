// import { useState } from "react";
import "./styles/App.css";
import Drawer from "./components/Drawer/Drawer";
import MainInput from "./components/MainInput/MainInput";
import BannerCarousel from "./components/BannerCarousel/BannerCarousel";

function App() {
	return (
		<div className="layout">
			<Drawer />

			<div className="content">
				<nav className="content-header">
					<MainInput />

					<div className="profile">
						<span className="profile__name">antioquia</span>
						<div className="image-mask">
							<img
								src="https://pt.quizur.com/_image?href=https://img.quizur.com/f/img63c03669b12989.02404101.jpg?lastEdited=1673541234&w=1024&h=1024&f=webp"
								alt="Profile picture"
								className="profile__image"
							/>
						</div>
					</div>
				</nav>

				<div className="content-container">
					<div className="main-content">
						<BannerCarousel />
					</div>

					<aside className="content-sidebar">Aside</aside>
				</div>
			</div>
		</div>
	);
}

export default App;
