import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchYoutubeData = async (url, params = {}, headers = {}) => {
    //value of url param must start with / and end with / eg: url = '/home/'
    const options = {
        params: { hl: "en", gl: "US", ...params },
        headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
            ...headers,
        },
    };
    try {
        const { data } = await axios.get(`${BASE_URL + url}`, options);
        return data;
    } catch (error) {
        console.error(error);
    }
};
