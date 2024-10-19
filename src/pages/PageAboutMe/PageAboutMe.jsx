import { useEffect } from "react";
import anime from "animejs";
import S from "./styles.module.scss";

export const PageAboutMe = () => {
  useEffect(() => {
    let texto = document.querySelectorAll("." + S.text);
    texto.forEach((t) => {
      t.innerHTML = t.textContent.replace(
        /./g,
        "<span class='letra'>$&</span>"
      );
    });

    anime.timeline().add({
      targets: "." + S.text + " .letra",
      opacity: [0, 1],
      easing: "easeInOutExpo",
      duration: 1000,
      delay: (el, i) => 10 * (i + 1),
    });
  }, []);

  return (
    <>
      <div className={S.container}>
        <div className={S.description}>
          <h6 className={S.text}>
            <span>/*</span> <br /> <br />
            Sou graduanda em Sistemas de Informação pela Universidade Federal de
            Alagoas (UFAL) e desenvolvedora frontend com foco em criar
            interfaces web interativas e eficientes. Tenho sólida experiência
            com React.js, React Native, JavaScript, Node.js, HTML, CSS, Sass,
            Bootstrap e Tailwind, além de explorar ferramentas como
            styled-components, Postman, Typescript, Next.js e o consumo de APIs
            REST.
          </h6>
          <h6 className={S.text}>
            Além dos meus estudos formais, sou uma entusiasta de projetos
            pessoais e acadêmicos, desenvolvendo desde pequenas aplicações web
            até sistemas complexos. Minha experiência abrange tanto projetos
            acadêmicos, quanto trabalhos freelancers, onde aprendi a adaptar
            minhas habilidades às necessidades específicas do cliente,
            valorizando a comunicação e colaboração.
          </h6>
          <h6 className={S.text}>
            Estou comprometida com o aprendizado contínuo e o aprimoramento das
            minhas habilidades como desenvolvedora. Além de buscar
            constantemente novos conhecimentos e técnicas em cursos online,
            workshops e eventos da área, também faço parte de comunidades de
            desenvolvedores, onde posso compartilhar experiências, aprender com
            outros profissionais e contribuir para o crescimento coletivo.
            <br />
            <br />
            <span>/*</span>
          </h6>
        </div>
      </div>
    </>
  );
};
