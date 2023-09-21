import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '47c19b6047msh3dc8ffdfce9c2a1p110779jsn820a44139ddb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const Apifetch =async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
