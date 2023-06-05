import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
      maxResults:'50',
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
    },
    headers: {
      'X-RapidAPI-Key': '0fce87551cmshd3e135ca9563066p18681bjsnd3baf424a2bb',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };

  export const fetchFromAPI = async (url) =>{
   const { data } = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}