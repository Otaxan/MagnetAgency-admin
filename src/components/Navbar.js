import React from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../images/avatar-removebg-preview.png";
import { ReactComponent as UvedomIcon } from "../images/uvedomleniya.svg";


function Navbar() {
  const location = useLocation();
  
  return (
    <>
      <div className="navbar">

        <div className="top">
          <div>
            <h3 style={{ fontWeight: '400', borderLeft: '1px solid rgba(0, 0, 0, 0.247)', padding: '15px 1rem' }}>Admin panel</h3>
          </div>
          <div className="topright">
            <UvedomIcon style={{ cursor: 'pointer' }} />
            <img src={avatar} alt="" />
          </div>
        </div>

        <div className="left">
          <div className="menu-item">
            <h4 className="section-title">Пользователи</h4>

            <Link to="/" className={`link ${location.pathname === '/' ? 'active-link' : ''}`}>
              <p>Все пользователи</p>
            </Link>
            
            <Link to="/add_user" className={`link ${location.pathname === '/add_user' ? 'active-link' : ''}`}>
              <p>Добавить</p>
            </Link>
          </div>
          <div className="menu-item">
            <h4 className="section-title">Менеджеры</h4>

            <Link to="/all_managers" className={`link ${location.pathname === '/all_managers' ? 'active-link' : ''}`}>
              <p>Все менеджеры</p>
            </Link>
            
            <Link to="/add_manager" className={`link ${location.pathname === '/add_manager' ? 'active-link' : ''}`}>
              <p>Добавить</p>
            </Link>
          </div>
          <div className="menu-item">
            <h4 className="section-title">Офферы</h4>

            <Link to="/all_offers" className={`link ${location.pathname === '/all_offers' ? 'active-link' : ''}`}>
              <p>Все офферы</p>
            </Link>
            
            <Link to="/add_offer" className={`link ${location.pathname === '/add_offer' ? 'active-link' : ''}`}>
              <p>Добавить</p>
            </Link>
          </div>
          <div className="menu-item">
            <h4 className="section-title">Статистика</h4>
            <Link to="/statistics_users" className={`link ${location.pathname === '/statistics_users' ? 'active-link' : ''}`}>
              <p>Пользователи</p>
            </Link>

            <Link to="/statistics_offers" className={`link ${location.pathname === '/statistics_offers' ? 'active-link' : ''}`}>
              <p>Офферы</p>
            </Link>
          </div>
          <div className="menu-item1">
            <Link to="/check" className={`linkempty link ${location.pathname === '/check' ? 'active-link' : ''}`}>
              <p>Проверка</p>
            </Link>
          </div>
          <div className="menu-item1">
            <Link to="/funds_requests" className={`linkempty link ${location.pathname === '/funds_requests' ? 'active-link' : ''}`}>
              <p>Вывод средств</p>
            </Link>
          </div>
          <div className="menu-item1">
            <Link to="/faq" className={`linkempty link ${location.pathname === '/faq' ? 'active-link' : ''}`}>
              <p>FAQ</p>
            </Link>
          </div>
          <div className="menu-item1">
            <Link to="/settings" className={`linkempty link ${location.pathname === '/settings' ? 'active-link' : ''}`}>
              <p>Настройки</p>
            </Link>
          </div>
          <div className="menu-item1">
            <Link to="/sign_in" className={`linkempty link ${location.pathname === '/sign_in' ? 'active-link' : ''}`}>
              <p>Вывод</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


