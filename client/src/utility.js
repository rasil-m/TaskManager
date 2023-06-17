import axios from 'axios'
const id=localStorage.getItem("id")
export const postData=(data)=>
 {
    return axios.post("http://localhost:8081/addTask",data)

 }

export const fetchData=()=>
  {
   return axios.get("http://localhost:8081/fetchData/"+id)

  }

export const deletData=(key)=>
   {
      return axios.delete("http://localhost:8081/deleteData/"+key+"/"+id)
   }

export const fetchOne=(key)=>
 {
   return axios.get("http://localhost:8081/fetchOne/"+key+"/"+id)
 }

export const UpdateOne=(data)=>
 {
   return axios.put("http://localhost:8081/UpdateTask",data)
 }

export const fetchCategory=(key)=>
 {
  return axios.get("http://localhost:8081/fetchCategory/"+key)
 }

export const fetchImp=()=>
 {
  return axios.get("http://localhost:8081/fetchImp")
 }

 export const signUp=(data)=>
 {
    return axios.post("http://localhost:8081/signUp",data)
 }
 export const Signin=(data)=>
 {
    return axios.post("http://localhost:8081/Signin",data)
 }