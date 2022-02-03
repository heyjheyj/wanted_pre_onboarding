import React from "react";
import styles from "./tagComponent.module.css";

const TagComponent = ({ deleteTag, tag }) => {
  return (
    <li className={styles.tagcomponent}>
      <span>
        {tag.text}
      </span>
      <button onClick={() => deleteTag(tag)}>x</button>
    </li>
  );
};

export default TagComponent;
