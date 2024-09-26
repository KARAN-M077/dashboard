import { useState } from "react";
import useFecthQuestions from "./useFetchQuestions";


const useTest=()=>{
    const {questions}=useFecthQuestions();
    //selected answers
   const [selectedAnswers,setSelectedAnswers]=useState({});
   //Total score
   const [total,setTotal]=useState(0);
   //question index
   const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
   //Submit test confirm status
   const [confirmStatus, setConfirmStatus] = useState(false);
   //pass test status
  const [passStatus, setpassStatus] = useState("");
  //submitted test status 
  const [submittedtest,setSubmittedtest]=useState(false);
  //show submitPage
  const [showSubmittedPage, setShowSubmittedPage] = useState(false);

  //select options
  const handleOptionChange = (questionId, option, correctAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));

    if (option === correctAnswer) {
      setTotal((prevTotal) => prevTotal + 1);
    }
  };
 //change to next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
//change to previous Question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
 //set the current question index
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };



}


export default useTest;