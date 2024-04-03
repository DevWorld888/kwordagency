import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../../assets/logok.png'

const NavComponent = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#1E3868'}} variant="dark" className='sticky-top'>
        <Container className='column-gap-lg-5'>
          <Navbar.Brand href="#home" style={{marginRight:'5em'}}>
            <img
              src={LogoImg}// Replace '/logo.png' with the path to your logo image
              width="350"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-start gap-lg-5 " style={{ flex: 1, color:"#FFF"}}>
              <Nav.Link href="#home" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold'}}>Inicio</Nav.Link>
              <Nav.Link href="#consul" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold'}}>Servicios</Nav.Link>
              <Nav.Link href="#contact" style={{color:'#FFF',fontSize:'18px',fontWeight:'bold',backgroundColor:'#4ABCC9',borderRadius:'15px'}}>Trabaj&eacute;mos Juntos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;

