import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import "./styles.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Bookmark />
            <h1>Trello Board Clone</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
