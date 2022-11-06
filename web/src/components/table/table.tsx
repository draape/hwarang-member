import React, { FC } from "react";

type TableProps = {
  rows: { cells: string[] }[];
};

export const Table: FC<TableProps> = ({ rows }) => (
  <table className="table">
    <thead>
      <tr>
        {rows[0].cells.map((cell, idx) => (
          <th key={idx}>{cell}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.slice(1).map((row, idx) => (
        <tr key={idx}>
          {row.cells.map((cell, idx) => (
            <td key={idx}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
