import { Header } from '../../components/Header/Header'
import S from './styles.module.scss'

export const Home = () => {
  return (
    <>
      <Header />
      <div className={S.container}>
        <div className={S.itens}>
          <div className={S.itensText}>
            <h5>Oi, eu sou a</h5>
            <h1>Camilla Alves</h1>
            <h5 className={S.colorDev}> &gt; Front-end developer</h5>
            <h6 className={S.description}>
              Sou graduanda em Sistemas de Informação pela Universidade Federal
              de Alagoas e uma desenvolvedora front-end dedicada. Possuo uma
              base sólida em JavaScript, ReactJs, React Native, HTML, CSS,
              Bootstrap e Sass,  estou constantemente
              buscando expandir meus conhecimentos e habilidades.
            </h6>

            <p>
              <span className={S.colorConst}>const</span>
              <span className={S.colorName}> githubLink</span> ={' '}
              <a href="https://github.com/camillaalves12" target="_blank" rel="noreferrer">
                "https://github.com/camillaalves12"
              </a>
            </p>

            <p>
              <span className={S.colorConst}>const</span>{' '}
              <span className={S.colorName}>linkedinLink</span> ={' '}
              <a
                href="https://www.linkedin.com/in/camilla-alves-/"
                target="_blank" rel="noreferrer"
              >
                "https://www.linkedin.com/in/camilla-alves-/"
              </a>
            </p>
          </div>
          <img src="../src/imgs/camilla 1.jpg" alt="Foto Camilla" />
        </div>
      </div>
    </>
  )
}
