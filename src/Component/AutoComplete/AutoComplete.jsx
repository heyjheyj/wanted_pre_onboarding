import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./AutoComplete.module.css";
import data from "./data/data";

const compareLabel = (a, b) => {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();

  if (labelA < labelB) return -1;
  if (labelA > labelB) return 1;

  return 0;
};

const AutoComplete = props => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [isAutoCompleting, setIsAutoCompleting] = useState(false);

  const boxRef = useRef();

  const selectSuggestion = useCallback(
    value => {
      setSuggestions([]);
      setText(value);
    },
    [setSuggestions, setText]
  );

  const clear = useCallback(
    () => {
      setIsAutoCompleting(false);
      setText("");
      setSuggestions([]);
    },
    [setIsAutoCompleting, setText, setSuggestions]
  );

  const renderSuggestions = useCallback(
    () => {
      return (
        isAutoCompleting &&
        <ul>
          {suggestions.map((item, index) =>
            <li key={index} onClick={() => selectSuggestion(item.label)}>
              {item.label}
            </li>
          )}
        </ul>
      );
    },
    [isAutoCompleting, suggestions, selectSuggestion]
  );

  const handleTextChanged = useCallback(
    e => {
      let suggestedDataList = [];
      let textValue = e.target.value;

      if (textValue !== "") {
        const tempValue = textValue.replaceAll("\\", "\\\\");
        const regex = new RegExp(`^${tempValue}`, "i");
        suggestedDataList = data
          .filter(e => regex.test(e.label))
          .sort(compareLabel);
      }
      setSuggestions(suggestedDataList);
      setText(textValue);
    },
    [setSuggestions, setText]
  );

  const handleClick = useCallback(
    e => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsAutoCompleting(false);
      }
    },
    [setIsAutoCompleting]
  );

  useEffect(
    () => {
      window.addEventListener("mousedown", handleClick);

      return () => {
        window.removeEventListener("mousedown", handleClick);
      };
    },
    [handleClick]
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>AutoComplete</h3>
      <div className={styles.autoCompleteBox} ref={boxRef}>
        {isAutoCompleting &&
          <button className={styles.closebutton} onClick={clear}>
            x
          </button>}
        <input
          value={text}
          type="text"
          autoComplete="off"
          onChange={handleTextChanged}
          onClick={() => setIsAutoCompleting(true)}
        />
        {suggestions.length > 0 && renderSuggestions()}
      </div>
      <span className={styles.text}>Search Top 100 Films</span>
    </div>
  );
};

export default AutoComplete;
