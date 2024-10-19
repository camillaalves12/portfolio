import { Techs } from "../../components/Techs/Techs";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMysql, TbBrandVite } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import S from "./styles.module.scss";
import { useWindowSizeIcons } from "../../components/useWindowSizeIcons/useWindowSizeIcons";

export const PageTechs = () => {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 35 : 20; // Ajuste os valores conforme necessário

  const techData = [
    { icon: <IoLogoJavascript size={iconSize} />, name: "Javascript" },
    { icon: <IoLogoHtml5 size={iconSize} />, name: "Html5" },
    { icon: <IoLogoCss3 size={iconSize} />, name: "Css3" },
    { icon: <IoLogoReact size={iconSize} />, name: "React" },
    { icon: <IoLogoReact size={iconSize} />, name: "React Native" },
    { icon: <DiBootstrap size={iconSize} />, name: "Bootstrap" },
    { icon: <IoLogoSass size={iconSize} />, name: "Sass" },
    { icon: <BiLogoTailwindCss size={iconSize} />, name: "Tailwind" },
    { icon: <BiLogoPostgresql size={iconSize} />, name: "Postgresql" },
    { icon: <TbBrandMysql size={iconSize} />, name: "Mysql" },
    { icon: <FaGitAlt size={iconSize} />, name: "Git" },
    { icon: <TbBrandVite size={iconSize} />, name: "Vite" },
  ];

  return (
    <>
      <div className={S.container}>
        <Techs title="Linguagens" techs={techData.slice(0, 3)} />
        <Techs title="Tecnologias" techs={techData.slice(3)} />
      </div>
    </>
  );
};
