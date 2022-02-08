import React, { useState } from "react";
import TagComponent from "./ section/tagComponent";
import styles from "./Tag.module.css";

const Tag = props => {
  const [tags, setTags] = useState([
    { id: 1, text: "CodeStates" },
    { id: 2, text: "jjang" }
  ]);
  const [id, setId] = useState(3);

  const onSubmit = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, { id: id, text: e.target.value }]);
      setId(id => id + 1);
      e.target.value = "";
    }
  };

  const deleteTag = tag => {
    setTags(tags.filter(item => item.id !== tag.id));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tag</h3>
      <div className={styles.tagContainer}>
        <ul className={styles.tags}>
          {tags.map(tag =>
            <TagComponent key={tag.id} tag={tag} deleteTag={deleteTag} />
          )}
        </ul>
        <input
          className={styles.textInput}
          onKeyUp={onSubmit}
          placeholder="Please enter to add tags"
        />
      </div>
    </div>
  );
};

export default Tag;
