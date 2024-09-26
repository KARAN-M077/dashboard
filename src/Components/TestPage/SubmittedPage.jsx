import { Link } from "react-router-dom";
const SubmittedPage = ({ status }) => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-blur">
      {status === 'passed' ? (
        <div className="border border-gray-100 rounded-xl shadow-lg flex p-4 m-4 gap-10 h-80 items-center relative">
          <div className="border border-gray-50 rounded-md p-3 bg-white">
            <iframe
              className="absolute inset-0 w-80 h-80"
              src="https://lottie.host/embed/a033db8c-4367-45e7-8734-69471419401e/iYC2giRWsi.json"
              style={{ zIndex: 5 }}
            ></iframe>
            <iframe
              className="h-32 object-cover"
              src="https://lottie.host/embed/de738586-437c-4f03-8ff3-4736cdab73a8/ioyvfrv2JI.json"
            ></iframe>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="block text-4xl uppercase font-black text-green-500">Congratulations!</h2>
            <p className="text-xl font-medium">You have moved to the next level</p>
            <div>
              <p className="font-medium uppercase text-lg">
                Test name: <span>React_Beginner</span>
              </p>
              <p className="font-medium uppercase text-lg">
                Result: <span>Passed</span>
              </p>
            </div>
            <Link to='/dashboard/studentdetails'>
            <button className="border border-orange-300 bg-orange-400 rounded-md w-20 h-10 font-medium text-lg text-white">
              Close
            </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="border border-gray-100 rounded-xl shadow-lg flex p-4 m-4 gap-10 h-80 items-center relative">
          <div className="border border-gray-50 rounded-md p-3 bg-white">
            <iframe
              className="object-cover"
              src="https://lottie.host/embed/a8ea9767-1d17-44b7-99c1-a2a02866083f/TyyxwKm98m.json"
            ></iframe>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h2 className="block text-4xl uppercase font-black text-red-500">Oops!</h2>
            <p className="text-xl font-medium">You have scored less than 75%</p>
            <div>
              <p className="font-medium uppercase text-lg">
                Test name: <span>React_Beginner</span>
              </p>
              <p className="font-medium uppercase text-lg">
                Result: <span>Failed</span>
              </p>
            </div>
            <p className="font-medium text-md">You have 1 more attempt. Ace it!</p>
            <Link to='/dashboard/studentdetails'>
            <button className="border border-orange-300 bg-orange-400 rounded-md w-20 h-10 font-medium text-lg text-white">
              Close
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedPage;
