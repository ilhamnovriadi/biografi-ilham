import React from "react";
import "./index.scss";

const URL_IMAGE =
  "https://secure.gravatar.com/avatar/530fad609529ffb94ec906a8e198aad5?s=200&d=identicon";

function Hubungi(props) {
  return (
    <div className="container-hubungi">
      <h2>
        <u>Hubungi Saya</u>
      </h2>
      <div className="con-form">
        <label>Nama Lengkap</label>
        <input placeholder="Masukan Nama Lengkap" type="text"></input>
        <label>Email</label>
        <input placeholder="Masukan Email" type="email"></input>
        <label>Pesan</label>
        <textarea placeholder="Masukan Pesan" rows={3}></textarea>
        <button>Kirim</button>
      </div>
      <div className="devider" />
    </div>
  );
}

export default Hubungi;
