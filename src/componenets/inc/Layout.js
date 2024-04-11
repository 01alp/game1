import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dice from '../images/dice.png';
import Favorite from '../images/favorite.png';
import Home from '../images/home.png';
import Back from '../images/back.jpeg';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [sortBy, setSortBy] = useState('12');
  const [order, setOrder] = useState('12');
  const handleSelect1 = (e) => setSortBy(e.target.value);
  const handleSelect2 = (e) => setOrder(e.target.value);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div id="wrapper" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <nav
        id="sidebar"
        className={`navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark ${
          isSidebarOpen ? '' : 'toggled'
        }`}
        style={{ background: `url(${Back})`, width: 170 }}
      >
        <div className="container-fluid d-flex flex-column p-0">
          <Link className="navbar-brand sidebar-brand m-0" to="/">
            <div className="sidebar-brand-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img className="img-fluid" src={Dice} alt="img" />
            </div>
            <div className="d-flex sidebar-brand-text mx-3" style={{ background: 'rgba(0,0,0,0.73)', marginBottom: 20 }}>
              <span>Games Haven</span>
            </div>
          </Link>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar" style={{ width: 150, marginTop: 20 }}>
            <li className="nav-item" style={{ color: 'rgba(0,0,0,0.73)', marginTop: 30 }}>
              <Link className="nav-link active" to="/">
                <img className="img-fluid" src={Home} alt="img" />
                <span style={{ fontSize: 18 }}>Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link d-inline-flex d-xl-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                to="/"
                style={{
                  fontSize: 18,
                  color: 'rgb(255,255,255)',
                  fontWeight: 'bold',
                }}
                aria-expanded={isOpen}
              >
                <img className="img-fluid" src={Dice} style={{ width: 32 }} alt="img" />
                Games
                <i className={`fas ${isOpen ? 'fa-caret-down' : 'fa-caret-right'}`} style={{ marginLeft: '10px' }}></i>
              </Link>
              <div className={`dropdown-menu${isOpen ? ' show' : ''}`}>
                <div>
                  <Link className="" to="/">
                    <span style={{ color: 'rgb(0,0,0)', fontSize: 18 }}>
                      <i className="far fa-star" style={{ marginRight: 5 }} />
                      Slots
                    </span>
                  </Link>
                </div>
                <div>
                  <span style={{ color: 'rgb(0,0,0)', fontSize: 18 }}>
                    <i className="far fa-star" style={{ marginRight: 5 }} />
                    Table Games
                  </span>
                </div>
                <Link className="dropdown-item" to="/">
                  <i className="far fa-dot-circle" style={{ marginRight: 5 }} />
                  Roulette
                </Link>
                <div>
                  <span style={{ color: 'rgb(0,0,0)', fontSize: 18 }}>
                    <i className="far fa-star" style={{ marginRight: 5 }} />
                    Card Games
                  </span>
                </div>
                <Link className="dropdown-item" to="/">
                  <i className="far fa-dot-circle" style={{ marginRight: 5 }} />
                  Blackjack
                </Link>
                <Link className="dropdown-item" to="/">
                  <i className="far fa-dot-circle" style={{ marginRight: 5 }} />
                  Pocker
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link d-inline-flex d-xl-flex align-items-center"
                to="/favorites"
                style={{
                  fontSize: 18,
                  color: 'rgb(255,255,255)',
                  fontWeight: 'bold',
                }}
                aria-expanded={isOpen}
              >
                <img className="img-fluid" src={Favorite} style={{ width: 32 }} alt="img" />
                Favorites
              </Link>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline"></div>
        </div>
      </nav>
      {/* End: Left Sidebar */}
      <div className="d-flex flex-column" id="content-wrapper" style={{ width: '100%' }}>
        <div id="content">
          {/* Start: Top NavBar */}
          <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
            <div className="container-fluid">
              <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button" onClick={toggleSidebar}>
                <i className="fas fa-bars" />
              </button>
              <ul className="navbar-nav flex-nowrap ms-auto">
                <li className="nav-item d-flex d-lg-flex align-items-center align-items-lg-center dropdown no-arrow mx-1">
                  <select
                    className="border rounded-pill"
                    style={{ marginRight: 5, width: 100 }}
                    data-bs-theme="dark"
                    value={sortBy}
                    onChange={handleSelect1}
                  >
                    <optgroup label="Sort By">
                      <option value="12">Name</option>
                      <option value="13">Rating</option>
                      <option value="14">Active Users</option>
                    </optgroup>
                  </select>
                  <select
                    className="border rounded-pill"
                    data-bs-theme="dark"
                    style={{ width: 100 }}
                    value={order}
                    onChange={handleSelect2}
                  >
                    <optgroup label="Sort By">
                      <option value="12">Ascending ↑</option>
                      <option value="13">Descending ↓</option>
                    </optgroup>
                  </select>
                </li>
                <div className="d-none d-sm-block topbar-divider" />
              </ul>
            </div>
          </nav>
          {/* End: Top NavBar */}
          <div id="allContnent">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
