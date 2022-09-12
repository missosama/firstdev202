import './App.css';
import React from "react";
function App() {
  let welcome = React.createElement(
    "h1",
    { style: { color: "red" } },
    'Welcome to react world'
  );
  return welcome;
}

export default App;


