import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_URL;
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_TOKEN}`,
	},
});

// PATHs
export const getImageUrl = (path, size = "original") => {
	return `${IMAGE_URL}/${size}/${path}`;
};

// MEDIA REQUESTS
export const getMedia = async (mediaName, mediaId) => {
	const res = await api.get(`/${mediaName}/${mediaId}`);
	return res.data;
};

export const getMultiSearch = async (query) => {
	const res = await api.get(`/search/multi?query=${query}`);
	return res.data.results;
};

// MOVIE REQUESTS
export const getMovieList = async (movieList) => {
	const res = await api.get(`/movie/${movieList}`);
	return res.data.results;
};

export const getMovieGenres = async () => {
	const res = await api.get("/genre/movie/list");
	return res.data.genres;
};

export const getMovieSearch = async (query, page = 1) => {
	const res = await api.get(`/search/movie?query=${query}&page=${page}`);
	return res.data.results;
};

// TV REQUESTS
export const getTvList = async (tvList) => {
	const res = await api.get(`/tv/${tvList}`);
	return res.data.results;
};

export const getTvGenres = async () => {
	const res = await api.get("/genre/tv/list");
	return res.data.genres;
};

export const getTvSearch = async (query, page = 1) => {
	const res = await api.get(`/search/tv?query=${query}&page=${page}`);
	return res.data.results;
};
