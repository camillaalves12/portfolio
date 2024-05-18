import { useEffect } from 'react';
import anime from 'animejs';
import { Header } from "../../components/Header/Header";
import S from "./styles.module.scss";

export const PageAboutMe = () => {
  useEffect(() => {
    let texto = document.querySelectorAll('.' + S.text);
    texto.forEach((t) => {
      t.innerHTML = t.textContent.replace(/./g, "<span class='letra'>$&</span>");
    });

    anime.timeline({loop: true})
      .add({
        targets: '.' + S.text + ' .letra',
        opacity: [0,1],
        easing: "easeInOutExpo",
        duration: 1000,
        delay: (el, i) => 10 * (i+1)
      });
  }, []);

  return (
    <>
      <Header />
      <div className={S.container}>
        <div className={S.description}>
          <h6 className={S.text}>
            <span>/*</span> <br/> <br/>
            Sou graduanda em Sistemas de Informação pela Universidade Federal de
            Alagoas e uma desenvolvedora front-end dedicada. Possuo uma base sólida
            em JavaScript, ReactJs, React Native, HTML, CSS, Bootstrap e Sass, estou
            constantemente buscando expandir meus conhecimentos e habilidades.
          </h6>
          <h6 className={S.text}>
            Além dos meus estudos formais, sou uma entusiasta de projetos pessoais e
            acadêmicos, desenvolvendo desde pequenas aplicações web até sistemas
            complexos. Minha experiência abrange tanto projetos acadêmicos, quanto trabalhos freelancers,
            onde aprendi a adaptar minhas habilidades às necessidades específicas do
            cliente, valorizando a comunicação e colaboração.
          </h6>
          <h6 className={S.text}>
            Estou comprometida com o aprendizado contínuo e o aprimoramento das
            minhas habilidades como desenvolvedora. Além de buscar constantemente
            novos conhecimentos e técnicas em cursos online, workshops e eventos da
            área, também faço parte de comunidades de desenvolvedores, onde posso
            compartilhar experiências, aprender com outros profissionais e
            contribuir para o crescimento coletivo.
            <br/>
            <br />
            <span>/*</span>
          </h6>
        </div>
      </div>
    </>
  );
};
