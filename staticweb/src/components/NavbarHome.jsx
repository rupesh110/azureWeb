import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useUserFullName } from '../slice/authUsers';

const NavbarHome = () => {
  const { userFullName} = useUserFullName();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  const dropdowMenu = (
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" onClick={handleLogout}>
        LogOut
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{ padding: '1px 20px', margin: '15px', text: '12px' }}>
          <Navbar.Brand style={{ fontSize: '30px' }} href="#home">
            CricketCircle
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#team">Teams</Nav.Link>
            <Nav.Link href="#schedule">Schedules</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div style={{ cursor: 'pointer' }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {userFullName !== '' ? (
                      <>
                        Signed in as: <span>{userFullName}</span>
                      </>
                    ) : (
                      <Link to="/login">Sign in</Link>
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
