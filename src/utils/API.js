import axios from "axios";

const config = {
  headers:{
    "X-RapidAPI-Key": "59a343c261msh4ca6fb00d5ce6c6p10cd10jsn5a3ab1fc625d",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com"
  }
};

export default function search(searchText) {
    return axios.get(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchText}`, config);
};
