import { useEffect, useState } from "react";
export const TodoDate = () => {
  // *date handling
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();
      let formattedDate = now.toLocaleDateString();
      let time = new Date().toLocaleTimeString();
      setDateTime(() => `${formattedDate} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="date-time">{dateTime}</span>;
};
