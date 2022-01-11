import React from "react";
import "./index.scss";

const URL_IMAGE =
  "https://secure.gravatar.com/avatar/530fad609529ffb94ec906a8e198aad5?s=200&d=identicon";

function Hobi(props) {
  return (
    <div className="container-hobi">
      <h2>
        <u>Hobi</u>
      </h2>
      <div className="con-text">
        <ul>
          <li>Membaca</li>
          <li>Youtube-an</li>
        </ul>
      </div>
    </div>
  );
}

export default Hobi;
