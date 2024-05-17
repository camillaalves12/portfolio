import { Header } from '../../components/Header/Header'
import S from './styles.module.scss'

export const Home = () => {
  return (
    <>
      <Header />
      <div className={S.container}>
        <div className={S.itens}>
          <div className={S.itensText}>
            <div>
              <h5 className={S.iAm}>Oi, eu sou a</h5>
              <h1 className={S.name}>Camilla Alves</h1>
            </div>
            <h5 className={S.colorDev}> &gt; Front-end developer</h5>

            <div className={S.divGit_Link}>
              <p>
                <span className={S.colorConst}>const</span>{' '}
                <span className={S.colorName}>linkedinLink</span> ={' '}
                <a href="https://www.linkedin.com/in/camilla-alves-/" target="_blank" rel="noreferrer">"https://linkedin.com/camillaalves"</a>
              </p>

              <p>
                <span className={S.colorConst}>const</span>{' '}
                <span className={S.colorName}> githubLink</span> ={' '}
                <a href="https://github.com/camillaalves12" target="_blank" rel="noreferrer">"https://github.com/camillaalves"</a>
                </p>
            </div>
          </div>
          <img src="../src/imgs/camilla 1.jpg" alt="Foto Camilla" />
        </div>
      </div>
    </>
  )
}


