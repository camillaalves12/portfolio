import S from './styles.module.scss'


export const Projects = ({ src, name, description, hrefProject, hrefCode, techs }) => {
  return (
    <div className={S.container}>
      <div className={S.card}>
        <img className={S.img} src={src} />
        <div className={S.description}>
          <h5> {name} </h5>
          <p>{description}</p>


          <div className={S.divTechs}>
            {techs.map((tech, index) => (
              <div key={index} className={S.techs}>
                {tech.icon}
              </div>
            ))}
          </div>


          <div className={S.btns}>
            <button className={S.btn}>
                <a href={hrefProject} target='_blank'>
                Visualizar Projeto
                </a>
              </button>
            <button className={S.btn}>
            <a href={hrefCode} target='_blank'>
                Visualizar Código
                </a>
              </button>
          </div>

        </div>
        <div></div>
      </div>
    </div>
  )
}
