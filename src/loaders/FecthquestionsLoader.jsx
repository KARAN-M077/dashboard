
const FecthquestionsLoader = () => {
  return (
    <div>
      <div className="flex flex-row gap-6 mt-5 border border-gray-200 rounded-md p-4 m-4 h-[300px]">
        
        <div className="w-32 flex flex-col items-center gap-2 border border-gray-200  rounded-md p-2 m-2">
        {[1, 2, 3].map(() => (
            <div className="h-12 w-12 bg-slate-200 animate-pulse rounded-lg"></div>
          ))}
        </div>

        
        <div className="w-3/4 flex flex-col border bg-slate-200 animate-pulse rounded-md p-4 m-2">
          
        </div>
      </div>

    </div>
  )
}

export default FecthquestionsLoader