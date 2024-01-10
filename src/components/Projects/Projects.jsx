import S from "./styles.module.scss";

export function Projects() {
  return (
    <div className={S.card}>
      <div className={S.description}>
        <h3>Project Name 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim
          eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae
          libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
        </p>
        <div className={S.btns}>
            <button className={S.btn} >Visualizar Projeto</button>
            <button className={S.btn} >Visualizar Código</button>
        </div>
      </div>
      <div>
        <img
          className={S.img}
          src="https://cdn.pixabay.com/photo/2023/12/25/10/27/dog-8468288_640.jpg"
        />
      </div>
    </div>
  );
}
