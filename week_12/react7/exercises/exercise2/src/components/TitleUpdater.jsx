import React, { useState, useEffect } from "react";
import "./TitleUpdater.css";

const TitleUpdater = () => {
  const defaultTitle = "React App";
  const [title, setTitle] = useState("");
  const maxChars = 60;

  useEffect(() => {
    document.title = title ? `${defaultTitle} - ${title}` : defaultTitle;
  }, [title]);

  const handleReset = () => setTitle("");

  return (
    <div className="title-container">
      <h2>Title Updater</h2>

      <label>
        Custom Title:
        <input
          type="text"
          value={title}
          onChange={(e) =>
            e.target.value.length <= maxChars && setTitle(e.target.value)
          }
          placeholder="Type here..."
        />
      </label>

      <p className="preview">
        Preview: "{defaultTitle}
        {title && ` - ${title}`}"
      </p>

      <p className="counter">
        {title.length}/{maxChars} characters
      </p>

      <button onClick={handleReset}>Reset to Default</button>
    </div>
  );
};

export default TitleUpdater;
