import axios from "axios";

const API_KEY = "ee309917";
const API_URL = "https://www.omdbapi.com/";
//fetch movies from api
export const fetchMovies = async (query, type = "", page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        S: query,
        page,
        type,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error Fetching Movies:", error);
    throw error;
  }
};

//fetch movies details from api

export const fetchMoviesDetails = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error Fetching Movie Details:", error);
    throw error;
  }
};
