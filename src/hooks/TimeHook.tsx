import { useEffect, useState } from "react";

export const TimeHook = () => {
  const name: string = "Blessing";
  const [timeOfDay, setTimeOfDay] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 0 && hour < 12) {
      setTimeOfDay(`morning, ${name} ⛅️`);
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay(`afternoon, ${name} ☀`);
    } else {
      setTimeOfDay(`evening, ${name} 🌙`);
    }
  }, []);

  return { timeOfDay };
};
