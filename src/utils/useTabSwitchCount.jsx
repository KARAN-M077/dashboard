import { useState, useEffect } from 'react';
//import useFullScreenStatus from './useFullScreenStatus'
const useTabSwitchCount = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  //const isFullScreen=useFullScreenStatus();
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTabSwitchCount(prevCount => prevCount + 1);
      }
      // if(!isFullScreen){
      //   setTabSwitchCount(prevCount => prevCount + 1);
      // }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return tabSwitchCount;
};

export default useTabSwitchCount;
