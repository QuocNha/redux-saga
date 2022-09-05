import axiosClient from "./apiClient";

const cityAPI = {
    getAll: ()=>{
         const url ="/cities"
        return axiosClient.get(url);
    }
};
export default cityAPI;