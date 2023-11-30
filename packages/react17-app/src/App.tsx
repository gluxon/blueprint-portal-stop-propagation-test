import React from "react";
import { Card, Portal } from "@blueprintjs/core";
import styles from "./App.module.css";

function App() {
  const [clickCount, setClickCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setClickCount((prev) => prev + 1);
  }, []);

  return (
    <Card interactive className={styles.container} onClick={handleClick}>
      <h1>React 17</h1>
      <p>
        Click counts: <strong>{clickCount}</strong>
      </p>
      <p>Click inside this box to increment the click count.</p>

      <ExamplePortal />
    </Card>
  );
}

function ExamplePortal() {
  return (
    <Portal className={styles.portal} stopPropagationEvents={["click"]}>
      <Card className={styles.portalContent} interactive>
        <h2>Portal</h2>
        <p>Clicks inside this should not increment counter in the other box.</p>
      </Card>
    </Portal>
  );
}

export default App;
