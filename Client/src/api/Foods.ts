import axios from "axios";
import Food from "../models/food";

export const getFoods = async () => {
    try{
        //console.log(import.meta.env.VITE_APIURL +  "api/v1/foods");
        const res = await axios.get(import.meta.env.VITE_APIURL +  "api/v1/foods");
        
        var result = await res.data;

        var foodArray =  result as Food[];

        return foodArray;
    } catch (error) {
        console.log(error);
    }
    
  };