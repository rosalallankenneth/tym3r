import { useState } from "react";
import { Card, Switch, Text } from "@mantine/core";
import { MODES } from "../utils/constants";

export default function Modes() {
  const [mode, setMode] = useState(MODES[0]);

  const onChangeMode = (m: string) => {
    setMode(m);
  }
  return (
    <Card
      shadow="sm"
      padding="xl"
      className="flex justify-center items-center gap-4 w-[300px]"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <Text fw={700} size="lg">Modes</Text>
        <p>Icon</p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {MODES.map(m => 
          <Switch
            key={m}
            checked={m === mode}
            color="grape"
            label={m}
            size="md"
            onChange={() => onChangeMode(m)}
          />
        )}
      </div>
    </Card>
  );
}