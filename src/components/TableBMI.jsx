import React from 'react';
import '../css/tableBMI.css'
const TableBMI = ({ data }) => {
  return (
    <div className="table-bmi">
      <table>
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>IMC (kg/m²)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.classification}</td>
              <td>{row.bmi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBMI;