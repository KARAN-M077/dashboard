
const ConfirmDialog = ({ total, questions,onConfirm, onCancel }) => {
 

  return (
    <>
      {/* Dialog Box */}
      <div className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="rounded-lg bg-white  p-8 shadow-2xl relative w-[35rem]">
          <h2 className="text-lg font-bold">Are you sure you want to submit the test</h2>

          <p className="mt-2 text-lg text-gray-500 font-semibold ">
            Total questions: {questions}
          </p>
          <p className="mt-2 text-lg text-green-500 font-semibold ">
            Questions attempted: {total}
          </p>
          <p className="mt-2 text-lg text-yellow-500 font-semibold ">
            Questions skipped: {questions - total}
          </p>

          <div className="mt-4 flex gap-2">
            {/* Submit Button */}
            <button
              type="button"
              onClick={onConfirm}
              className="rounded bg-green-50 px-4 py-2 text-md font-medium text-green-600"
            >
              Submit Test
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onCancel}
              className="rounded bg-gray-50 px-4 py-2 text-md font-medium text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
