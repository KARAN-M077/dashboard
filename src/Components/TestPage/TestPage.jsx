import { useEffect, useState } from "react";
import useFetchQuestions from "../../utils/useFetchQuestions";
import FecthquestionsLoader from '../../loaders/FecthquestionsLoader'
import axios from "axios";
import {
  calculatePassPercentage,
  determinePassStatus,
} from "../../utils/testUtils";
import ConfirmDialog from "../../utils/ConfirmDialog";
// import useNextLevel from "../../utils/useNextLevel";
import SubmittedPage from "./SubmittedPage";
const TestPage = () => {
  const { questions, fetchquestions } = useFetchQuestions();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [total, setTotal] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [passStatus, setpassStatus] = useState("");
  const [submittedtest,setSubmittedtest]=useState(false);
  const [showSubmittedPage, setShowSubmittedPage] = useState(false);
  const handleOptionChange = (questionId, option, correctAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));

    if (option === correctAnswer) {
      setTotal((prevTotal) => prevTotal + 1);
    }
  };

  useEffect(() => {
    fetchquestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };
  const baseurl = import.meta.env.VITE_REACT_APP;
  // const {setNextLevel,setSubmittedtest}=useNextLevel()
  const handleConfirm = async () => {
    try {
      const passPercentage = calculatePassPercentage(total, questions.length);
      const status = determinePassStatus(passPercentage);
      setpassStatus(status);

      const data = {
        skill_name: "node",
        status: passStatus,
        level: "beginner",
      };
      const response = await axios.post(
        `https://devsquad-api.onrender.com/api/questions/submit/50fc52d2c79144b89a8543da11a4f435`,
        data
      );

      console.log(response);

      if (response.data.code === 201) {
      setSubmittedtest(true); 
      setShowSubmittedPage(true);
      setConfirmStatus(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmStatus) {
      setConfirmStatus(true); 
    } else {
      await handleConfirm(); 
    }

  };
  if (!questions.length) return <div><FecthquestionsLoader/> </div>;

  const currentQuestion = questions[currentQuestionIndex];
  const questionId = currentQuestion._id;

  return (
    <div>
      {confirmStatus && (
        <ConfirmDialog
          total={total}
          questions={questions.length}
          onConfirm={handleConfirm}
          onCancel={() => setConfirmStatus(false)}
        />
      )}
      {
        submittedtest && showSubmittedPage &&(
            <SubmittedPage status={passStatus}/>
        )
      }
      <div className="flex justify-end m-5">
        <button
          onClick={handleSubmit}
          className="border border-orange-300 bg-orange-400 p-2 m-2 rounded-md w-30 h-10 font-semibold text-white text-center "
        >
          Submit Test
        </button>
      </div>
      <div className="flex flex-row gap-6 mt-5 border border-gray-200 rounded-md p-4 m-4">
        {/* Left side: Sidebar showing the question numbers */}
        <div className="w-32 flex flex-col items-center gap-2 border border-gray-200 rounded-md p-2 m-2">
          <h3 className="font-bold text-lg mb-3 w-full">Questions</h3>
          {questions.map((_, index) => {
            const questionId = questions[index]._id;
            const isAnswered = selectedAnswers[questionId] !== undefined;

            return (
              <div
                key={questionId}
                className={`p-2 border border-gray-200 rounded-md w-10 h-10 shadow-sm text-center font-semibold cursor-pointer ${
                  isAnswered
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-50"
                } ${
                  currentQuestionIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>

        {/* Right side: Display one question with options */}
        <div className="w-3/4 flex flex-col border border-gray-50 rounded-md p-4 m-2">
          <div className="flex flex-col flex-grow">
            <div className="border border-gray-200 shadow-sm rounded-md p-3 font-semibold bg-white mb-4">
              {/* Display the current question text */}
              <p className="font-bold">{currentQuestion.question}</p>

              {/* Display the options for the current question */}
              {currentQuestion.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-2 border border-gray-200 rounded-md shadow-sm mt-2 ${
                    selectedAnswers[questionId] === option
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-gray-50"
                  }`}
                >
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name={`question-${questionId}`}
                      value={option}
                      checked={selectedAnswers[questionId] === option}
                      onChange={() =>
                        handleOptionChange(
                          questionId,
                          option,
                          currentQuestion.answer
                        )
                      }
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between gap-16 mt-auto">
              {/* Show Previous button only if not on the first question */}
              {currentQuestionIndex > 0 && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </button>
              )}
              {/* Show Next button only if not on the last question */}
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              ) : (
                <div className="text-center"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
