import {Student} from '../models/student';
import {ListParams, ListResponse} from '../models/common'
import axiosClient from "./apiClient";

const studentAPI = {
    getAll(params: ListParams) : Promise<ListResponse<Student>>{
         const url ="/students"
        return axiosClient.get(url,{params});
    },
    getByID(id: string) : Promise<ListResponse<Student>>{
      const url =`/students/${id}`
     return axiosClient.get(url);
   },
    add(params: Student) : Promise<Student>{
      const url ="/students"
     return axiosClient.post(url,{params});
    },
    update(data: Student) : Promise<Student>{
      const url ="/students"
     return axiosClient.patch(url,data);
    },    
    remove(id: string) : Promise<any>{
      const url =`/students/${id}`
     return axiosClient.delete(url);
    },    
};
export default studentAPI;