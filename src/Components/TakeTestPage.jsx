
import Navbar from './Navbar/Navbar'
import useFullScreenStatus from '../utils/useFullScreenStatus';  
import TestPage from './TestPage/TestPage';
import Conditions from './Conditions/Conditions';
import useNextLevel from '../utils/useNextLevel';
import SubmittedPage from './TestPage/SubmittedPage';
const TakeTestPage = () => {
  const isFullScreen = useFullScreenStatus();
  const {nextlevel,submittedtest}=useNextLevel()
  return (
    <div>
      <Navbar/>
      {
        isFullScreen ? <TestPage/> : <Conditions/>
      }
    </div>
  )
}

export default TakeTestPage