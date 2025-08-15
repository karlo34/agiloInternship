import { useEffect, useState } from 'react';

export function useIsSmUp(): boolean {
  const [isSmUp, setIsSmUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmUp(window.innerWidth >= 640);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmUp;
}