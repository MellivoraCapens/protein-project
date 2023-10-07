import axios from "axios";

export const getFoods = async () => {
    try{
        console.log(process.env.APIURL! + "/api/v1/foods");
        // const res = await axios.get(process.env.APIURL! + "/api/v1/foods")

        return process.env.APIURL! + "/api/v1/foods";
    } catch (error) {
        //Handle Errors
    }
    
  };