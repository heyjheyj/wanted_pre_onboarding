import React, { useState, useCallback } from "react";
import styles from "./ClickToEdit.module.css";

const ClickToEdit = props => {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState("20");
  const [currentFocus, setCurrentFocus] = useState("");

  const changeName = useCallback(
    e => {
      setName(e.target.value);
    },
    [setName]
  );

  const changeAge = useCallback(
    e => {
      setAge(e.target.value);
    },
    [setAge]
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ClickToEdit</h3>
      <div className={styles.name}>
        <label htmlFor="username">이름</label>
        <input
          className={
            currentFocus === "name" ? `${styles.nameinput}` : `${styles.input}`
          }
          type="text"
          id="username"
          defaultValue={name}
          onFocus={() => setCurrentFocus("name")}
          onBlur={changeName}
        />
      </div>
      <div className={styles.age}>
        <label htmlFor="userage">나이</label>
        <input
          className={
            currentFocus === "age" ? `${styles.ageinput}` : `${styles.input}`
          }
          type="text"
          id="userage"
          defaultValue={age}
          onFocus={() => setCurrentFocus("age")}
          onBlur={changeAge}
        />
      </div>
      <span>
        이름 {name} 나이 {age}
      </span>
    </div>
  );
};

export default ClickToEdit;
