import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">gab</span>
        <span className="remainder">inha</span>
      </div>
      <div className="typed-keys">hfgabroul</div>
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
