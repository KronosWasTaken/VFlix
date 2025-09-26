import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const VIDSRC_BASE_URL = "https://vidsrc.xyz/embed";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

tmdbApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
    } else if (error.request) {
    } else {
    }
    return Promise.reject(error);
  }
);

export const api = {
  getTrending: async (mediaType = "all", timeWindow = "day", page = 1) => {
    try {
      const response = await tmdbApi.get(
        `/trending/${mediaType}/${timeWindow}`,
        { params: { page } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPopular: async (mediaType = "movie", page = 1) => {
    try {
      const response = await tmdbApi.get(`/${mediaType}/popular`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTopRated: async (mediaType = "movie", page = 1) => {
    try {
      const response = await tmdbApi.get(`/${mediaType}/top_rated`, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  search: async (query: string, page = 1) => {
    try {
      const response = await tmdbApi.get("/search/multi", {
        params: { query, page, include_adult: false },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMovieDetails: async (movieId: string) => {
    try {
      const response = await tmdbApi.get(`/movie/${movieId}`, {
        params: { append_to_response: "videos,credits" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTvDetails: async (tvId: string) => {
    try {
      const response = await tmdbApi.get(`/tv/${tvId}`, {
        params: { append_to_response: "videos,credits" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTvSeasonDetails: async (tvId: string, seasonNumber: number) => {
    try {
      const response = await tmdbApi.get(`/tv/${tvId}/season/${seasonNumber}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getStreamingUrl: (
    mediaType: "movie" | "tv",
    id: string,
    season?: number,
    episode?: number
  ) => {
    if (mediaType === "movie") {
      return `${VIDSRC_BASE_URL}/movie?tmdb=${id}`;
    } else {
      return `${VIDSRC_BASE_URL}/tv?tmdb=${id}&season=${season}&episode=${episode}`;
    }
  },

  getMovieGenres: async () => {
    try {
      const response = await tmdbApi.get("/genre/movie/list");
      return response.data.genres;
    } catch (error) {
      throw error;
    }
  },

  getTvGenres: async () => {
    try {
      const response = await tmdbApi.get("/genre/tv/list");
      return response.data.genres;
    } catch (error) {
      throw error;
    }
  },

  getMoviesByGenre: async (
    genreId: number,
    page = 1,
    sortBy = "popularity.desc"
  ) => {
    try {
      const response = await tmdbApi.get("/discover/movie", {
        params: { with_genres: genreId, page, sort_by: sortBy },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTvShowsByGenre: async (
    genreId: number,
    page = 1,
    sortBy = "popularity.desc"
  ) => {
    try {
      const response = await tmdbApi.get("/discover/tv", {
        params: { with_genres: genreId, page, sort_by: sortBy },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const getImageUrl = (
  path: string | null | undefined,
  size: string = "original"
) => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (
  path: string | null | undefined,
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original" = "w500"
) => {
  return getImageUrl(path, size);
};

export const getBackdropUrl = (
  path: string | null | undefined,
  size: "w300" | "w780" | "w1280" | "original" = "w1280"
) => {
  return getImageUrl(path, size);
};

export const getProfileUrl = (
  path: string | null | undefined,
  size: "w45" | "w185" | "h632" | "original" = "w185"
) => {
  return getImageUrl(path, size);
};
