import React from 'react';

import nube from "../img/nube.jpg";
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav >

      <Link to='/'>
        <span className="navbar-brand">
          
          Weather App
        </span>
      </Link>
      
      <Link to='/about'>
        <span className="about">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />

    </nav>
  );
};

export default Nav;
