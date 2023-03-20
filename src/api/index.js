import axios from "axios";

const BASE_URL_API = "https://toolinsta-api.cyclic.app/";

export const GET_MEDIA_URL_API = BASE_URL_API + "media/";

export const postApiCall = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
