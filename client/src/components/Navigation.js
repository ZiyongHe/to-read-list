import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Google Book Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Link to="/saved" className="nav-link">
              Saved Books
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
