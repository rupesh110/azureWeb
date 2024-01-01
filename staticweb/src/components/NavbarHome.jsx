import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useGetUserFullNameMutation } from '../slice/usersApi';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
  const session = sessionStorage.getItem('token');
  const usersToken = session ? JSON.parse(session).token : null;

  const [userFullName, setUserFullName] = useState('');
  const [getUserFullName, { error, isLoading }] = useGetUserFullNameMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserFullName({ usersToken });
  
        if (result.error) {
          console.error('Error fetching user full name:', result.error.message);
        } else {
          setUserFullName(result.data.message);
        }
      } catch (error) {
        console.error('Unexpected error during data fetching:', error.message);
      }
    };
    if (usersToken) {
      fetchData();
    }
  }, [getUserFullName, usersToken]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  const dropdowMenu = (
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1" onClick={handleLogout}>LogOut</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{ padding: '1px 20px', margin: '15px', text: '12px' }}>
          <Navbar.Brand style={{ fontSize: '30px' }} href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {isLoading ? (
                'Loading...'
              ) : (
                <div style={{ cursor: 'pointer' }}>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">

                    {userFullName !== '' ? (
                      <>
                        Signed in as: <span>{userFullName}</span>
                      </>
                    ) : (
                      <Link to="/register">Sign in</Link>
                    )}
                    </Dropdown.Toggle>
                    {dropdowMenu}
                  </Dropdown>
                </div>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
