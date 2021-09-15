import React, { useState } from "react";

import wordList from "./resources/words.json";

const MAX_TYPED_KEYS = 25;

const getWord = () => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList(index);
  return word.toLowerCase();
};

const App = () => {
  const [typedKeys, setTypedKeys] = useState([]);
  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e; // const key = e.key;
    setTypedKeys((prev) => [...prev, key].slice(MAX_TYPED_KEYS * -1));
  };

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <span className="matched">gab</span>
        <span className="remainder">inha</span>
      </div>
      <div className="typed-keys">
        {typedKeys ? typedKeys.join(" ") : null}&nbsp;
      </div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>garrafa</li>
          <li>tela</li>
          <li>quadro</li>
          <li>janela</li>
          <li>parafuso</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
