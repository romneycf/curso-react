import React from 'react'
import styles from './Home.module.css';
import Rbmlogo from '../../img/logo-h.png';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>RBMWEB Sistemas Inteligentes by Dimensa</h1>
      <h3>Romney Corrêa Freire</h3>
      <h2>Curso de React</h2>
      <h4>Professor Daniel Tostes</h4>
      
      <a className="fusion-logo-link" href="https://site.rbmweb.com.br/">
			  <img src={Rbmlogo} width="600" height="178"></img>
			</a>
    </div>
  )
}
