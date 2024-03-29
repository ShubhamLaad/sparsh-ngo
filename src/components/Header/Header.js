import React, { useState } from 'react';
import './Header.scss'
import { Container } from '../Layout/Layout';
import { NavLink, Link } from 'react-router-dom';
import OutSideCilck from '../OutSideClick/OutSideClick'

const LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/work', label: 'Our Work' },
  { path: '/contact-us', label: 'Contact Us' },
  { path: '/donate', label: 'Donate' },
]

export default function Header(props) {

  const [showNav, setshowNav] = useState(false)

  return (
    <header>
      <Container>
        <OutSideCilck className="mobile-wrap" onClose={() => { setshowNav(false) }}>
          <Link to="/" className="logo" title="Sparsh NGO"><img width="135px" height="60px" className="img-responsive" src="/logo.webp" alt="logo" /></Link >
          <button aria-label="Toggle navigation" className={`visible-xs navbar-toggle ${showNav ? 'open' : 'close'}`} onClick={() => { setshowNav(!showNav) }}>
            <span className="sr-only d-none">Toggle navigation</span>
            <span className="icon-bar icon-bar-1"></span>
            <span className="icon-bar icon-bar-2"></span>
            <span className="icon-bar icon-bar-3"></span>
          </button>
        </OutSideCilck>
        <ul className={`nav-list ${showNav ? 'show-animation' : ''} `}>
          {
            LINKS.map(link => <li key={link.label}><NavLink to={link.path} title={link.label} activeclassname="active">{link.label}</NavLink ></li>)
          }
        </ul>

      </Container>
    </header>
  );
}
