import axios from "axios";

const tokenStr = "w8WkHcxqcKTlxxh6JPf80lXOwS8rF1BKfNifP6y7vx3Z018di3N4LwzY";
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = `${tokenStr}`;
const defParams = {
  orientation: "landscape",
};

export async function getPhotos(query, page, perPage){
    const res = await axios.get(`/search?page=${page}&per_page=${perPage}&query=${query}`, defParams);
    console.log(res.data);
    return res.data
}