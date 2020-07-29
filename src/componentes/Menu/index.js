import React from 'react';
import logo from '../../assets/imagens/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink'
import Button from '../Button';
function Menu(){
    return(
       <nav className = "Menu">
         <a href = '/'>
          <img className = "Logo" src ={logo} alt = "HDflix logo" />
          </a>
          <Button as ="a" className="ButtonLink" href ="/">
          Adicionar Novo Video
          </Button>
       </nav> 
    );

}
export default Menu;// para poder importar o componente em outros locais