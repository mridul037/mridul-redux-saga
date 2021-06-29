import axios from "axios";
axios.defaults.baseURL =`https://api.github.com/repositories`

export const fetchIssue= async () =>{
    try {
       
        const data = await axios.get(`/6427813/issues`);
        return data;

    }catch(error){
     console.log(error);
     throw error;
    }
}