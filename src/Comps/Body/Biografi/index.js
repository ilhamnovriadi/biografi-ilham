import React from "react";
import "./index.scss";

const URL_IMAGE =
  "https://secure.gravatar.com/avatar/530fad609529ffb94ec906a8e198aad5?s=200&d=identicon";

function Biografi(props) {
  return (
    <div className="container-biografi">
      <h2>
        <u>Biografi</u>
      </h2>
      <div className="con-img">
        <img src={URL_IMAGE} />
      </div>
      <div className="con-text">
        <p>
          Hay, perkenalkan nama saya Ilham Novriadi biasa dipanggil Ilham. Saya
          adalah seorang sarjana pertanian di Universitas Sriwijaya. Lahir di
          Kota Lubuk Linggau pada tanggal 21 November 1995, saat ini saya
          menetap di Kota Tangerang Selatan, Banten. 3 Tahun terakhir ini saya
          menekuni profesi sebagai Freelance Fullstack Developer, berangkat dari
          kemauan yang kuat untuk sukses dan passion saya beranikan diri untuk
          fokus mendalami dunia teknologi dan merantau ke Ibukota.
        </p>
      </div>
    </div>
  );
}

export default Biografi;
