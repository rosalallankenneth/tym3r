import { useEffect, useState } from "react";
import { getTimeUntilMinuteMark } from "../utils/timer";
import { Card, Text } from "@mantine/core";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMinuteMark(30));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMinuteMark(30));
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      shadow="sm"
      padding="xl"
      className="flex justify-center items-center"
    >
      <div className="text-7xl">
        {timeLeft.minutesRemaining}m {timeLeft.secondsRemaining % 60}s
      </div>

      <Text mt="xs" c="dimmed" size="sm">
        left until {timeLeft.nextMark.toLocaleTimeString()}
      </Text>
    </Card>
  );
}