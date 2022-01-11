import React from "react";
import "./index.scss";

function Pendidikan(props) {
  return (
    <div className="container-pendidikan">
      <h2>
        <u>Pendidikan</u>
      </h2>
      <div className="con-table">
        <table>
          <thead>
            <tr>
              <th style={{ width: 5 + "em" }}>No.</th>
              <th style={{ width: 40 + "em" }}>Instansi</th>
              <th style={{ width: 45 + "em" }}>Jurusan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SMP Negeri 2 Palembang</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SMA Negeri 2 Palembang</td>
              <td>IPA</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Universitas Sriwijaya</td>
              <td>Agroekoteknologi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pendidikan;
