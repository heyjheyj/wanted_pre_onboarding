import React, { useState } from "react";
import styles from "./ClickToEdit.module.css";

const ClickToEdit = ({ initEdit }) => {
  const [name, setName] = useState(initEdit.name);
  const [age, setAge] = useState(initEdit.age);
  const [currentFocus, setCurrentFocus] = useState("");

  const changeName = e => {
    setName(e.target.value);
  };

  const changeAge = e => {
    setAge(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ClickToEdit</h3>
      <div className={styles.name}>
        <label htmlFor="username">
          이름
          <input
            className={
              currentFocus === "name"
                ? `${styles.nameinput}`
                : `${styles.input}`
            }
            type="text"
            id="username"
            data-testid="test-nameinput"
            defaultValue={name}
            onFocus={() => setCurrentFocus("name")}
            onBlur={changeName}
          />
        </label>
      </div>
      <div className={styles.age}>
        <label htmlFor="userage">
          나이
          <input
            className={
              currentFocus === "age" ? `${styles.ageinput}` : `${styles.input}`
            }
            type="text"
            id="userage"
            data-testid="test-ageinput"
            defaultValue={age}
            onFocus={() => setCurrentFocus("age")}
            onBlur={changeAge}
          />
        </label>
      </div>
      <span>
        이름 {name} 나이 {age}
      </span>
    </div>
  );
};

export default ClickToEdit;
