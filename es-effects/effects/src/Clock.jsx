import { useEffect, useState } from "react";

export function Clock() {
  const [time, updateTime] = useState(Date);
  function updateTimer() {
    updateTime(Date);
  }
  useEffect(() => {
    setInterval(updateTimer, 1000);
  }, []);

  return <h2>{time}</h2>;
}
