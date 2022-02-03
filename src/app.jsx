import styles from "./app.module.css";
import React from "react";
import Toggle from "./Component/Toggle/Toggle";
import Modal from "./Component/Modal/Modal";
import Tab from "./Component/Tab/Tab";
import Tag from "./Component/Tag/Tag";
import AutoComplete from "./Component/AutoComplete/AutoComplete";
import ClickToEdit from "./Component/ClickToEdit/ClickToEdit";

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
