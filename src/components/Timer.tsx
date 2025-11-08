import { useEffect, useState } from "react";
import { getTimeUntilMinuteMark, requestNotificationPermission, showTimerNotification } from "../utils/timer";
import { Card, Text } from "@mantine/core";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMinuteMark(30));

  useEffect(() => {
    requestNotificationPermission();

    const interval = setInterval(() => {
      const next = getTimeUntilMinuteMark(30);
      setTimeLeft(next);

      // When timer reaches 0, trigger notification once
      if (next.msRemaining <= 0) {
        showTimerNotification();
      }
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      shadow="sm"
      padding="xl"
      className="flex justify-center items-center w-[350px]"
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