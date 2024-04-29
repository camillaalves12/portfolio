import { Techs } from '../../components/Techs/Techs'
import { Header } from '../../components/Header/Header'
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoSass,
} from 'react-icons/io5'
import { DiBootstrap } from 'react-icons/di'
import { FaGitAlt, FaJava } from 'react-icons/fa6'
import S from './styles.module.scss'

const techData = [
  { icon: <IoLogoJavascript size={55} />, name: 'Javascript' },
  { icon: <IoLogoHtml5 size={55} />, name: 'Html5' },
  { icon: <IoLogoCss3 size={55} />, name: 'Css3' },
  { icon: <FaJava size={55} />, name: 'Java' },
  { icon: <IoLogoReact size={55} />, name: 'React' },
  { icon: <IoLogoReact size={55} />, name: 'React Native' },
  { icon: <DiBootstrap size={55} />, name: 'Bootstrap' },
  { icon: <IoLogoSass size={55} />, name: 'Sass' },
  { icon: <FaGitAlt size={55} />, name: 'Git' },
]

export const PageTechs = () => {
  return (
    <>
      <Header />
      <div className={S.container}>
        <Techs title="Linguagens" techs={techData.slice(0, 4)} />
        <Techs title="Tecnologias" techs={techData.slice(4)} />
      </div>
    </>
  )
}
