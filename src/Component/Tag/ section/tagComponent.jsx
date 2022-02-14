import React from "react";
import styles from "./tagComponent.module.css";

const TagComponent = ({ deleteTag, tag }) => {
  return (
    <li className={styles.tagcomponent} data-testid={`test-tag${tag.id}`}>
      <span data-testid={`test-text${tag.id}`}>
        {tag.text}
      </span>
      <button
        data-testid={`test-deletebutton${tag.id}`}
        onClick={() => deleteTag(tag)}
      >
        x
      </button>
    </li>
  );
};

export default TagComponent;
