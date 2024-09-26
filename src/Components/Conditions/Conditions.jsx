import useFullScreenStatus from "../../utils/useFullScreenStatus";
const Conditions = () => {
  const isFullScreen=useFullScreenStatus();
  return (
    <>
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col border border-gray-200 w-2/5 h-1/4 gap-4  text-justify rounded-md p-4 font-medium text-lg text-gray-700 shadow-lg">
       <div>
        <h2 className="font-bold uppercase text-green-500">react_beginner assessment</h2>
       </div>
       <h2>Points to Remember</h2>
        <p>The test must be taken on a desktop or laptop computer only. Mobile
        devices are not permitted.</p> 
        <p>The test requires access to your camera and
        microphone for monitoring purposes during the entire duration of the
        test.</p> 
        <p>Ensure that your face should be clearly visible throughout the examination.</p> 
        <p>The test interface should be in full-screen mode throughout the
        duration of the test.</p> 
        <p>Tab switching during the test will result in automatic submission of the test.</p>
        <p>Any attempt to engage in malpractice activities, including but not
        limited to cheating, using unauthorized materials, or communicating with
        others during the test, will result in immediate disqualification and
        consequences as determined by the test administrators.</p>
        
      <div className="flex justify-end">
        <button className="border border-blue-200 bg-blue-500 p-1 rounded-md text-white w-40"
        onClick={() => {
          if (!isFullScreen) {
            document.documentElement.requestFullscreen();
          }
        }}
        
        >Agree & Proceed</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Conditions;
