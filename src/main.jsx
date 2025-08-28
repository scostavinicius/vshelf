import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import "./styles/fonts.css";
import Home from "./pages/Home/Home";
import MediaPage from "./pages/MediaPage/MediaPage";
import SearchPage from "./pages/SearchPage/SearchPage";

import { register } from "swiper/element/bundle";
register();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaPath/:id" element={<MediaPage />} />
				<Route path="/search/multi" element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
