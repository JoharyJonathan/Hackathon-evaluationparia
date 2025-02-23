import { useState, useEffect } from "react";

export default function useTimer(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return seconds;
}
