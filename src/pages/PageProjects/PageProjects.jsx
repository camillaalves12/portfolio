import { Header } from '../../components/Header/Header'
import { Projects } from '../../components/Projects/Projects'
import S from './styles.module.scss'

import Quiz from '../../imgs/Quiz.png'
import MostraTech from '../../imgs/mostraTech.png'
import TopekaBank from '../../imgs/topekaBank.png'
import BestPizza from '../../imgs/bestPizza.png'
import Calculadora from '../../imgs/calculadora.png'

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoSass } from "react-icons/io5";
import { DiBootstrap } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind  } from "react-icons/tb";

// const techData = [
//   [  
//     { icon: <IoLogoJavascript size={30}/>, name: 'Javascript' },
//     { icon: <IoLogoHtml5 size={30} />, name: 'Html5' },
//     { icon: <IoLogoCss3 size={30} />, name: 'Css3' },
//     { icon: <FaJava size={30} />, name: 'Java' }
//   ],
//   { icon: <IoLogoReact size={30} />, name: 'React' },
//   { icon: <IoLogoReact size={30} />, name: 'React Native' },
//   { icon: <DiBootstrap size={30} />, name: 'Bootstrap' },
//   { icon: <IoLogoSass size={30} />, name: 'Sass' },
//   { icon: <FaGitAlt size={30} />, name: 'Git' }
// ];

const techData = [
  [  
    { icon: <SiTypescript  size={30} />},
    { icon: <TbBrandNextjs  size={30} />},
    { icon: <TbBrandTailwind  size={30} />},
    { icon: <IoLogoReact size={30} /> },
  ],
  [
    { icon: <IoLogoJavascript size={30}/> },
    { icon: <IoLogoReact size={30} /> },
    { icon: <DiBootstrap size={30} /> },
    { icon: <IoLogoSass size={30} /> },
  ],
  [
    { icon: <IoLogoJavascript size={30}/> },
    { icon: <IoLogoReact size={30} /> },
    { icon: <IoLogoSass size={30} /> },
  ],
  [
    { icon: <IoLogoJavascript size={30}/> },
    { icon: <IoLogoHtml5 size={30} />, name: 'Html5' },
    { icon: <IoLogoCss3 size={30} />, name: 'Css3' },
  ],

];


export const PageProjects = () => {
  return (
    <>
      <Header />
      <div className={S.container}>
        <Projects
            src={BestPizza}
            name="Best Pizza"
            description="É um app de vendas de pizza que  oferece uma experiência completa de compra, desde a seleção do cardápio até o pagamento seguro."
            hrefProject="https://best-pizza-jt9ogw8xx-camillaalves12s-projects.vercel.app/"
            hrefCode="https://github.com/camillaalves12/bestPizza"
            techs={techData[0]}
          />
          <Projects
            src={MostraTech}
            name="Mostra Tech"
            description="Amostra Tech é um guia de pontos turísticos com uma breve descrição, é uma tour virtual por locais da cidade de Penedo-AL."
            hrefProject="https://mostratech.netlify.app/"
            hrefCode="https://github.com/camillaalves12/techCultura"
            techs={techData[1]}

            />
          <Projects
            src={Quiz}
            name="App Quiz"
            description="Quiz sobre IA com 5 perguntas. Possui feedback instantâneo e teste seus conhecimentos quantas vezes desejar."
            hrefProject="https://github.com/camillaalves12/QuizApp"
            hrefCode="https://github.com/camillaalves12/calculadora"
            techs={techData[2]}

          />
          <Projects
            src={TopekaBank}
            name="Topeka Bank"
            description="Topeka Bank é um aplicativo bancário que oferece uma solução conveniente para a conversão de moedas para dólares americanos ou euros."
            hrefProject="https://camillaalves-topekabank.netlify.app/"
            hrefCode="https://github.com/camillaalves12/TopekaBank"
            techs={techData[3]}

          />
          <Projects
            src={Calculadora}
            name="Calculadora"
            description="É uma calculadora básica que permite que os usuários realizem cálculos rapidamente, incluindo adição, subtração."
            hrefProject="https://camillaalves-calculadora.netlify.app/"
            hrefCode="https://github.com/camillaalves12/calculadora"
            techs={techData[3]}
          />
      </div>
    </>
  )
}
