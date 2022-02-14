import styles from "./app.module.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

import Toggle from "./Component/Toggle/Toggle";
import Modal from "./Component/Modal/Modal";
import Tab from "./Component/Tab/Tab";
import Tag from "./Component/Tag/Tag";
import AutoComplete from "./Component/AutoComplete/AutoComplete";
import ClickToEdit from "./Component/ClickToEdit/ClickToEdit";

function App() {
  const [initAutoComplete, setInitAutoComplete] = useState([]);
  const initTags = [{ id: 1, text: "CodeStates" }, { id: 2, text: "jjang" }];
  const initEdit = { name: "김코딩", age: "20" };

  const getData = async () => {
    let result = await Axios("/data/data.json")
      .then(res => {
        let data = res.data;
        return data;
      })
      .catch(err => console.log(err));
    return result;
  };

  useEffect(() => {
    queueMicrotask(async () => {
      let result = await getData();
      setInitAutoComplete(result);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Toggle />
      <Modal />
      <Tab />
      <Tag initTags={initTags} />
      <AutoComplete initData={initAutoComplete} />
      <ClickToEdit initEdit={initEdit} />
    </div>
  );
}

export default App;
