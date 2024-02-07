import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useUserFullName } from '../slice/authUsers';

const NavbarHome = () => {
  const { userFullName } = useUserFullName();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  const dropdowMenu = (
    <Dropdown.Menu
      style={{
        backgroundColor: '#343a40',
        borderColor: '#343a40',
      }}
    >
      <Dropdown.Item href="#/action-1" onClick={handleLogout} style={{ color: 'green' }}>
        LogOut
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2" style={{ color: 'green' }}>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-3" style={{ color: 'green' }}>
        About
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          {/* <img src="./circketCircle.jpg" alt="cricket" style={{ maxWidth: '3%', height: 'auto' }} /> */}

          <Navbar.Brand style={{ fontSize: '30px', color: '#fff' }} as={Link} to="/">
            CricketCircle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Use Link to navigate to the AllTeam page */}
              <Nav.Link as={Link} to="/allTeam" style={{ color: '#fff' }}>
                Teams
              </Nav.Link>
              <Nav.Link as={Link} to="/allSchedules" style={{ color: '#fff' }}>
                Schedules
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: '#fff' }}>
                About
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <div style={{ cursor: 'pointer', color: 'grey', paddingRight: '60px' }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
                    {userFullName !== '' ? (
                      <>
                        Signed in as: <span style={{ color: '#fff' }}>{userFullName}</span>
                      </>
                    ) : (
                      <Link to="/login" style={{ color: '#fff' }}>
                        Sign in
                      </Link>
                    )}
                  </Dropdown.Toggle>
                  {dropdowMenu}
                </Dropdown>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
