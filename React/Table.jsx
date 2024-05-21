import React, { useState } from "react";
import "./styles.css";

function generateTable(rows, columns) {
  const tableData = Array(rows)
    .fill(0)
    .map(() => Array(columns).fill(0));
  return (
    <table>
      <thead>
        <tr>
          {Array(columns)
            .fill(0)
            .map((_, i) => (
              <th key={i}>Column {i + 1}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>
                Cell {i + 1}, {j + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(3);

  return (
    <div>
      <h2>Generate Table</h2>
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <input
        type="number"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
      />
      <button onClick={() => console.log(generateTable(rows, columns))}>
        Generate Table
      </button>
      {generateTable(rows, columns)}
    </div>
  );
}

export default App;

// App.css
table,
th,
td {
  border: 2px solid #ddd;
  border-collapse: collapse;
}
