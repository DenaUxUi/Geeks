import React from 'react';
import Logo from '../../shared/UI/Logo/Logo';
import "./header.css";
import cart from '../../shared/icons/bx_bx-cart.svg';
import search from '../../shared/icons/gridicons_search.svg';
import { Link } from 'react-router-dom';

function Header() {
  const isAuthenticated = !!localStorage.getItem('access');

  return (
    <div className='Header'>
      <nav>
        <Logo />
        <div className='nav-text nav-container'>
          <div className='selected-bg'>
            <Link to="/SecondPage" className='PT-sans Link selected-color'>ПОНРАВИЛОСЬ</Link>
          </div>
          <ul>
            <Link to={isAuthenticated ? "/PersonalPage" : "/Login"}>
              <li className='PT-sans func-text'>ЛИЧНЫЙ КАБИНЕТ</li>
            </Link>
            <li className='PT-sans func-text'>НАСТРОЙКИ</li>
            <Link to="/Cart">
              <li><img className='func-text icon-small' src={cart} alt="корзина" /></li>
            </Link>
            <li><img className='func-text icon-small' src={search} alt="поиск" /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
