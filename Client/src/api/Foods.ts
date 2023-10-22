import axios from "axios";

export const getFoods = async () => {
    try{
        console.log(import.meta.env.VITE_APIURL ||  "api/v1/foods");
        const res = await axios.get(import.meta.env.VITE_APIURL ||  "api/v1/foods");

        const { data } = await res;

        return data;
    } catch (error) {
        console.log(error);
    }
    
  };