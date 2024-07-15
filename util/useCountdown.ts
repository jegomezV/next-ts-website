import { useState, useEffect } from 'react';

type UseCountdownProps = (start: number, onEnd: () => void) => number;

export const useCountdown: UseCountdownProps = (start, onEnd) => {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((timer) => {
        if (timer - 1 <= 0) {
          clearInterval(id);
          onEnd();
          return 0;
        }
        return timer - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [onEnd]);

  return timer;
};
