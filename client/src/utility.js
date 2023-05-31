import axios from 'axios'
export const postData=(data)=>
 {
    return axios.post("http://localhost:8081/addTask",data)

 }

export const fetchData=()=>
  {
   return axios.get("http://localhost:8081/fetchData")

  }

export const deletData=(key)=>
   {
      return axios.delete("http://localhost:8081/deleteData/"+key)
   }