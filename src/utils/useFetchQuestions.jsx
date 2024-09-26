import { useState } from "react";
import axios from 'axios'

const useFecthQuestions=()=>{
   const [questions,setQuestions]=useState([]);

   const baseurl=import.meta.env.VITE_REACT_APP;
  
   const fetchquestions=async()=>{
    try {
      const  response=await axios.get(`https://devsquad-api.onrender.com/api/questions/get/javascript/Easy`);
      setQuestions(response.data.data);
    } catch (error) {
      console.log(error)
    }
   }
   
   return {questions,fetchquestions};
};

export default  useFecthQuestions;
