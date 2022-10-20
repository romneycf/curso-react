import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import Home from "../Home/Home";
import AppAdvinha from "../Aula01/AppAdvinha";
import AppChurrascometro from "../Aula02/AppChurrascometro";
import AppWiki from "../Aula03/AppWiki";
import NoPage from "../NoPage/NoPage";
import Navbar from "../../components/Navbar/Navbar";

export default function Main() {
  return (
    <div className={styles.Main}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aula01" element={<AppAdvinha />} />
          <Route path="/aula02" element={<AppChurrascometro />} />
          <Route path="/aula03" element={<AppWiki />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
