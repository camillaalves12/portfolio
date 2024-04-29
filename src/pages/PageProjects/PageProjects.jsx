import { Header } from '../../components/Header/Header'
import { Projects } from '../../components/Projects/Projects'
import S from './styles.module.scss'

import Quiz from '../../imgs/Quiz.png'
import MostraTech from '../../imgs/mostraTech.png'
import TopekaBank from '../../imgs/topekaBank.png'
import BestPizza from '../../imgs/bestPizza.png'

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
          />
          <Projects
            src={MostraTech}
            name="Mostra Tech"
            description="Amostra Tech é um guia de pontos turísticos com uma breve descrição, é uma tour virtual por locais da cidade de Penedo-AL."
            hrefProject="https://mostratech.netlify.app/"
            hrefCode="https://github.com/camillaalves12/techCultura"
            />
          <Projects
            src={Quiz}
            name="App Quiz"
            description="Quiz sobre IA com 5 perguntas. Possui feedback instantâneo e teste seus conhecimentos quantas vezes desejar."
            hrefProject="https://camillaalves-quizapp.netlify.app/"
            hrefCode="https://github.com/camillaalves12/QuizApp"
          />
          <Projects
            src={TopekaBank}
            name="Topeka Bank"
            description="Topeka Bank é um app de banco que converte moedas em dolar ou euro, foi um dos meus primeiros projetos em React."
            hrefProject="https://camillaalves-topekabank.netlify.app/"
            hrefCode="https://github.com/camillaalves12/TopekaBank"
          />
          <Projects
            src={TopekaBank}
            name="Topeka Bank"
            description="Topeka Bank é um app de banco que converte moedas em dolar ou euro, foi um dos meus primeiros projetos em React."
            hrefProject="https://camillaalves-topekabank.netlify.app/"
            hrefCode="https://github.com/camillaalves12/TopekaBank"
          />
      </div>
    </>
  )
}
