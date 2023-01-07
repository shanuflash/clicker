import "./App.css";
import { useState, React } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

function App() {
  const [count, setcount] = useState(0);
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
          onClick={() => setcount(count + 1)}
        >
          <AddIcon style={{ color: "white" }} />
        </button>
        <button
          disabled={count === 0}
          style={{
            borderRadius: "100%",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setcount(count - 1)}
        >
          <RemoveIcon style={{ color: "white" }} />
        </button>
        <button
          disabled={count === 0}
          style={{
            borderRadius: "100%",
            width: "100px",
            height: "100px",
          }}
          onClick={() => setcount(0)}
        >
          <ClearIcon style={{ color: "white" }} />
        </button>
      </div>
      <div className="Count">{count}</div>
    </div>
  );
}

export default App;
