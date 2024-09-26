import { useState } from "react"


const useNextLevel=()=>{

    const [nextlevel,setNextLevel]=useState('passed');
    const [submittedtest,setSubmittedtest]=useState(false);

    return {nextlevel,setNextLevel,submittedtest,setSubmittedtest}
}

export default useNextLevel;