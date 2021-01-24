import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">Google Book Seach</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav>
          <Link to="/saved" className="nav-link">
            Saved Books
          </Link>
          <Link to="/" className="nav-link">
            Search
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
