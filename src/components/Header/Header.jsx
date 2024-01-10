import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import S from './styles.module.scss'

export function Header() {
   return(
      <Navbar className={S.header}>
        <Container >
          <Navbar.Brand href="#" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Sobre Mim</Nav.Link>
            <Nav.Link href="#">Projetos</Nav.Link>
            <Nav.Link href="#">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   )
}