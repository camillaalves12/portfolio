import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import S from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar expand="lg">
      <Container className={S.header}>
        <NavLink to="/">camilla_alves</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/projects" className="nav-link" ClassName={S.active}>
              _projetos
            </NavLink>
            <NavLink to="/tech" className="nav-link" ClassName={S.active}>
              _tecnologias
            </NavLink>
            <NavLink to="/about" className="nav-link" ClassName={S.active}>
              _sobre_mim
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
