import React, { ReactNode } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import thumbnail from '../../img/thumbnail_image.png';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aula01">AppAdvinha</Link>
          </li>
          <li>
            <Link to="/aula02">AppChurrascometro</Link>
          </li>
          <li>
            <Link to="/aula03">AppWiki</Link>
          </li>
          <img src={thumbnail} />
        </ul>
      </nav>
    </div>
  );
}
