import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./AutoComplete.module.css";

const compareLabel = (a, b) => {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();

  if (labelA < labelB) return -1;
  if (labelA > labelB) return 1;

  return 0;
};

const AutoComplete = ({ initData }) => {
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

  const clear = () => {
    setIsAutoCompleting(false);
    setText("");
    setSuggestions([]);
  };

  const renderSuggestions = useCallback(
    () => {
      return (
        isAutoCompleting &&
        <ul data-testid="test-suggestionlist">
          {suggestions.map((item, index) =>
            <li
              data-testid={`test-suggestion${index}`}
              key={index}
              onClick={() => selectSuggestion(item.label)}
            >
              {item.label}
            </li>
          )}
        </ul>
      );
    },
    [isAutoCompleting, suggestions, selectSuggestion]
  );

  const handleTextChanged = e => {
    let suggestedDataList = [];
    let textValue = e.target.value;

    if (textValue !== "") {
      const tempValue = textValue.replaceAll("\\", "\\\\");
      const regex = new RegExp(`^${tempValue}`, "i");
      suggestedDataList = initData
        .filter(e => regex.test(e.label))
        .sort(compareLabel);
    }
    setSuggestions(suggestedDataList);
    setText(textValue);
  };

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
    <div className={styles.container} data-testid="test-component">
      <h3 className={styles.title}>AutoComplete</h3>
      <div
        className={styles.autoCompleteBox}
        ref={boxRef}
        data-testid="test-container"
      >
        {isAutoCompleting &&
          <button
            data-testid="test-clearbutton"
            className={styles.closebutton}
            onClick={clear}
          >
            x
          </button>}
        <input
          value={text}
          type="text"
          autoComplete="off"
          data-testid="test-input"
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
