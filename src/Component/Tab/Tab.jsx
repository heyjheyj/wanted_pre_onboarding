import React, { useState, useCallback } from "react";
import styles from "./Tab.module.css";

const Tab = props => {
  const [current, setCurrent] = useState(0);
  const tabs = ["ONE", "TWO", "TRHEE"];

  const selected = {
    background: "#431cc6",
    color: "white",
    transition: "background 0.5s ease"
  };

  const changeTab = useCallback(order => setCurrent(order), [setCurrent]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tab</h3>
      <ul className={styles.tabLists}>
        {tabs.map((tab, index) =>
          <li
            key={index}
            className={styles.tab}
            onClick={() => changeTab(index)}
            style={current === index ? selected : {}}
          >
            {`Tab${index + 1}`}
          </li>
        )}
      </ul>
      <span className={styles.text}>
        Tab Menu {tabs[current]}
      </span>
    </div>
  );
};

export default Tab;
