import "./App.css";
import { useState, React } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="Head">Clicker</div>
      <div className="Butt">
        <button
          style={{
            borderRadius: "100%",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          <AddIcon style={{ color: "white" }} />
        </button>
        <button
          disabled={Count === 0}
          style={{
            borderRadius: "100%",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setCount((prev) => prev - 1)}
        >
          <RemoveIcon style={{ color: "white" }} />
        </button>
        <button
          disabled={Count === 0}
          style={{
            borderRadius: "100%",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setCount(0)}
        >
          <ClearIcon style={{ color: "white" }} />
        </button>
      </div>
      <div className="Count">{Count}</div>
    </div>
  );
}

export default App;
