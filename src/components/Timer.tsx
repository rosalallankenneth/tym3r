import { useEffect, useState } from "react";
import { getTimeUntilMinuteMark, requestNotificationPermission, showTimerNotification } from "../utils/timer";
import { Card, Switch, Text } from "@mantine/core";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMinuteMark(30));
  const [enabledNotifications, setEnabledNotifications] = useState(true);

  useEffect(() => {
    if(enabledNotifications) requestNotificationPermission();

    const interval = setInterval(() => {
      const next = getTimeUntilMinuteMark(30);
      setTimeLeft(next);

      // When timer reaches 0, trigger notification once
      if (enabledNotifications && next.msRemaining <= 0) {
        showTimerNotification();
      }
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, [enabledNotifications]);

  const onToggleNotifications = () => {
    setEnabledNotifications(prev => !prev);
  }

  return (
    <Card
      shadow="sm"
      padding="xl"
      className="flex justify-center items-center gap-4 w-[350px]"
    >
      <div className="text-7xl">
        {timeLeft.minutesRemaining}m {timeLeft.secondsRemaining % 60}s
      </div>

      <Text c="dimmed" size="sm">
        left until {timeLeft.nextMark.toLocaleTimeString()}
      </Text>
      
      <Switch
        checked={enabledNotifications}
        color="grape"
        label="Enable Notifications"
        size="md"
        onChange={onToggleNotifications}
      />
    </Card>
  );
}