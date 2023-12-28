import {Container, Nav, Navbar} from 'react-bootstrap';

const NavbarHome = () => {
  const session = sessionStorage.getItem('token');

  console.log('Session', JSON.parse(session));

  // if (session){
  //   const pasrseSession = JSON.parse(session);
  //   console.log('Session', pasrseSession);
  // }else{
  //   console.log('No hay session');
  // }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{padding: '1px 20px', margin: '15px', text: '12px'}}>
          <Navbar.Brand style={{fontSize: '30px'}}href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}

export default NavbarHome;

