import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  let styles = {
    backgroundColor: status ? "blue" : "red",
  };

  return (
    <div
      className="App"
      onClick={() => {
        setStatus(!status);
      }}
      style={styles}
    >
      <h1 style={{ color: status ? "white" : "purple" }}>hello.</h1>

      <div className="ball" style={{}}></div>
    </div>
  );
}

export default App;
