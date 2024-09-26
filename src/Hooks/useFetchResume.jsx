import { useState , useEffect } from "react";
import axios from 'axios'

const useFecthResume=()=>{
   const [resumeData,setResume]=useState([]);

   const baseurl=import.meta.env.VITE_REACT_APP;
   useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const parseData = JSON.parse(storedData);
        const studentId = parseData.studentId;
        // setStudentName(parseData.name);
        fetchresume(studentId);
    }
}, []);
   const fetchresume=async(studentId)=>{
    try {
      const  response=await axios.get(`https://devsquad-api.onrender.com/api/resume/get-resume/${studentId}`);
      setResume(response.data.resume);
    } catch (error) {
      console.log(error)
    }
  }
   
   return {resumeData,fetchresume};
};

export default  useFecthResume;
