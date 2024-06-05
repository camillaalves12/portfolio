import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import S from './styles.module.scss'
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Navbar expand="lg">
      <Container className={S.header}>
        <a onClick={() => scrollTo('home')}>camilla_alves</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <AiOutlineMenu color="#cdcdcd" size={32} className={S.iconHam}/> {/* Substitua #cdcdcd pela cor desejada e 32 pelo tamanho desejado */}
        </Navbar.Toggle>
 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a onClick={() => scrollTo('projects')} className={S.nav}>
              _projetos
            </a>
            <a onClick={() => scrollTo('techs')} className={S.nav}>
              _tecnologias
            </a>
            <a onClick={() => scrollTo('aboutMe')} className={S.nav}>
              _sobre_mim
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}