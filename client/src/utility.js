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

export const fetchOne=(key)=>
 {
   return axios.get("http://localhost:8081/fetchOne/"+key)
 }

export const UpdateOne=(data)=>
 {
   return axios.put("http://localhost:8081/UpdateTask",data)
 }

export const fetchCategory=(key)=>
 {
  return axios.get("http://localhost:8081/fetchCategory/"+key)
 }