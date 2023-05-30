import axios from 'axios'
export const postData=(data)=>
 {
    return axios.post("http://localhost:8081/addTask",data)

 }