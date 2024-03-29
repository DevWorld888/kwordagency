import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../../assets/logok.png'

const NavComponent = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#1E3868'}} variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={LogoImg}// Replace '/logo.png' with the path to your logo image
              width="220"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center" style={{ flex: 1, color:"#FFF"}}>
              <Nav.Link href="#home" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold'}}>Inicio</Nav.Link>
              <Nav.Link href="#services" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold'}}>Servicios</Nav.Link>
              <Nav.Link href="#contact" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold',backgroundColor:'#4ABCC9',borderRadius:'15px'}}>Cont&aacute;ctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;

