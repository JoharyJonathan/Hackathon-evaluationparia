import { useEffect, useState } from "react";

export default function Timer({ initialSeconds = 60 }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className="text-center text-lg font-bold">
      Temps restant: {seconds} sec
    </div>
  );
}
