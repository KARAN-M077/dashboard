import { useState, useEffect } from 'react';

const useFullScreenStatus = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [isFullScreen]);

  return isFullScreen;
};

export default useFullScreenStatus;
