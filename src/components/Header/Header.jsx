import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import S from './styles.module.scss'
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar expand="lg">
      <Container className={S.header}>
        <NavLink to="/">camilla_alves</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <AiOutlineMenu color="#cdcdcd" size={32} className={S.iconHam}/> {/* Substitua #cdcdcd pela cor desejada e 32 pelo tamanho desejado */}
        </Navbar.Toggle>
 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/projects" className={S.nav}>
              _projetos
            </NavLink>
            <NavLink to="/tech" className={S.nav}>
              _tecnologias
            </NavLink>
            <NavLink to="/about" className={S.nav}>
              _sobre_mim
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
