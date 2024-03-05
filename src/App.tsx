import { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Container, Card, Checkbox, Flex } from "@mantine/core";
import CheckboxButton from "./CheckboxButton";
import classes from "./CheckboxButton/CheckboxGroup.module.css";

export default function App() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <MantineProvider theme={theme}>
      <Container size={430} mt="xl">
        <Card withBorder>
          <Checkbox.Group
            classNames={classes}
            label="What are your favorite colors?"
            value={value}
            onChange={setValue}
          >
            <Flex gap="sm" wrap="wrap">
              <CheckboxButton label="Red" value="red" />
              <CheckboxButton label="Green" value="green" />
              <CheckboxButton label="Blue" value="blue" />
              <CheckboxButton label="Yellow" value="yellow" />
            </Flex>
          </Checkbox.Group>
        </Card>
      </Container>
    </MantineProvider>
  );
}
