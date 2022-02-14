import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = e => setIsSwitchOn(e.target.checked);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Toggle</h3>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="toggleSwitch"
          onClick={toggleSwitch}
          data-testid="test-togglecheckbox"
        />
        <label className={styles.label} htmlFor="toggleSwitch">
          <span className={styles.toggleInner} />
          <span className={styles.switch} />
        </label>
      </div>
      <span className={styles.text} data-testid="test-text">
        Toggle Switch {isSwitchOn ? "ON" : "OFF"}
      </span>
    </div>
  );
};

export default Toggle;
