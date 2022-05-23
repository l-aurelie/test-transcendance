import React, { useEffect } from "react"
import axios from "axios"

import './App.css'
/* Include toutes les images */
import logo from './assets/pong.jpeg'

import profil from './assets/profil.png'
import msg from './assets/msg.png'
import amis from './assets/amis.png'
import param from './assets/param.png'
import logout from './assets/logout.jpeg'

/* Il vaudrait mieux creer un fichier .js par composant et l'import
Ici j'ai utilise des composant fonctionnel mais il ya d'autre maniere de faire notamment si on a besoin de state */

/* La barre de navigation, juste des image pour le moment : a rendre cliquable + utiliser react router*/
function Nav() {
  return(
    <div className='Nav'>
      <img src={profil} alt='navbut' className='navButton'></img>
      <img src={msg} alt='navbut' className='navButton'></img>
      <img src={amis} alt='navbut' className='navButton'></img>
      <img src={param} alt='navbut' className='navButton'></img>
      <img src={logout} alt='navbut' className='navButton'></img>
    </div>
  );
}

const UserProfil = () => {
  
 
  console.log("USER");
  return(
    <div>
      <h1>User</h1>
    </div>
  );
}

/* Corps du site contient la nav barre et un place holder ou placer le jeu ou profil, ou tchat ou autre composant*/
function Body() {
  return(
    <div className='body'>
      <Nav />
      <UserProfil />
    </div>
  );
}

/* Banniere juste un titre et un logo pour la 'beaute' */
function Banner() {
  return (
    <div className='banner'>
      <div className='titreSite'> PONG-PONG </div>
      <img className='logo' src={logo} alt='logo_du_site'></img>
    </div>
  );
}

/* Le module App react  grace au render d'index.js il sera appele directement a la div root du DOM (dans le index.html) */
function App() {
  return (
    <div>
      <Banner />
      <Body />
    </div>
  );
}

export default App;
