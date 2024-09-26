
const calculatePassPercentage = (total, questionCount) => {
    const percentage = (total / questionCount) * 100;
    return percentage.toFixed(0);
  };
  
const determinePassStatus = (percentage) => {
    return percentage >= 75 ? 'passed' : 'failed';
};
  

export {
    calculatePassPercentage,
    determinePassStatus
}