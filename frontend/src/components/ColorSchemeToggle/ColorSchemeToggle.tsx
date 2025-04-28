import { Switch, useMantineColorScheme } from '@mantine/core';
import { useState, useEffect } from "react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(false);

    useEffect(() => {
        setColorScheme(!checked ? "dark" : "light");
    }, [checked]);

  return (
    <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        color="gray"
        label="darkmode"
        size="lg"
    />
  );
}
