"use client";

import { useEffect, useState } from "react";

type Props = {
  endValue: number;
  duration: number;
};

export default function CountNumber({ endValue, duration }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    function updateCount(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    }

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return (
    <p className="text-lg font-medium md:font-bold xl:text-5xl">
      {Math.round(count)}
    </p>
  );
}
