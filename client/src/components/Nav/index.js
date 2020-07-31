import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
import './style.css'

function Nav () {
  
  const { pathname } = useLocation()
  const possiblePaths = [ '/match', '/profile', '/messages', '/ourmission', '/meettheteam']
  const logout = () => {
    localStorage.setItem('oAuth', '')
  }
  const renderNav = () => {
    if (pathname === '/') {
      return (
        <nav>
          <div className='nav-wrapper pink darken-2'>
            <a href='/' className='brand-logo'>
              Fetch
            </a>
            <ul id='nav-mobile' className='right'>
              <li>
                <a className='modal-trigger' href='#modal1'>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>    
      )
    } else if (pathname === '/thread') {
      return (
        <nav>
          <div className='nav-wrapper pink darken-2 back-btn'>
            <Link to='/messages'>
            <Icon>
              navigate_before
            </Icon>
            </Link>
            <ul id='nav-mobile' className='right'>
              <li className="exit-btn">
                <Link to='/match'>
                <Icon href='/home'>
                  close
                </Icon>
                </Link>
              </li>
            </ul>
          </div>
        </nav>    
      );
    } else if ( possiblePaths.includes(pathname) ) {
      return (
        <Navbar
          className = 'pink darken-2'
          alignLinks="right"
          brand={<Link className="brand-logo" to='/match'>Fetch</Link>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <Link to="/match">
            Match
          </Link>
          <Link to="/messages">
            Messages
          </Link>
          <Link to="/profile">
            Profile
          </Link>
          <Link to='/' onClick= { logout }>
            Logout
          </Link>
        </Navbar>
      )
    }
    else {
      return (
        <nav>
          <div className='nav-wrapper pink darken-2'>
            <a href='/' className='brand-logo'>
              Fetch
            </a>
          </div>
        </nav> 
      )
    }
  }
  return renderNav()
}

export default Nav
