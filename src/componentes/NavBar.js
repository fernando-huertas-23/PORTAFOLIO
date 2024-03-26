import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../materiales/img/logo.png';
import navIcon1 from '../materiales/img/nav-icon1.png';
import navIcon2 from '../materiales/img/nav-icon2.png';
import navIcon3 from '../materiales/img/nav-icon3.png';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  

    return(
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="ejemplo.com"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/fernando-lysoft?tab=repositories"><img src={navIcon2} alt="" /></a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-fernando-huertas-supa-2a69b3300/"><img src={navIcon3} alt="" /></a>
              </div>
             
                <button className="vvd"><span>Contactame</span></button>
             
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}