import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import S from './styles.module.scss';
import 'animate.css';
import anime from 'animejs/lib/anime.es.js';

export const Home = () => {
  useEffect(() => {
    anime({
      targets: '.' + S.name,
      translateX: [
        { value: 250, duration: 800, easing: 'easeInOutSine' },
        { value: 0, duration: 800, easing: 'easeInOutSine' }
      ],
      rotate: [
        { value: '1turn', duration: 800, easing: 'easeInOutSine' },
        { value: '0turn', duration: 800, easing: 'easeInOutSine' }
      ]
    });
  }, []);

  return (
    <>
      <Header />
      <div className={S.container}>
        <div className={S.itens}>
          <div className={S.itensText}>
            <div>
              <h5 className={`${S.iAm} animate__animated animate__shakeY`}>Oi, eu sou a</h5>
              <h1 className={`${S.name} animate__animated animate__shakeY`}>Camilla Alves</h1>
            </div>

            <h5 className={`${S.colorDev} animate__animated animate__shakeY`}>&gt; Front-end developer</h5>
            
            
            <div className={`${S.divGit_Link} animate__animated animate__flipInX`}>
              <p>
                <span className={S.colorConst}>const</span>{' '}
                <span className={S.colorName}>linkedinLink</span> ={' '}
                <a href="https://www.linkedin.com/in/camilla-alves-/" target="_blank" rel="noreferrer">"https://linkedin.com/camillaalves"</a>
              </p>
              <p>
                <span className={S.colorConst}>const</span>{' '}
                <span className={S.colorName}>githubLink</span> ={' '}
                <a href="https://github.com/camillaalves12" target="_blank" rel="noreferrer">"https://github.com/camillaalves"</a>
              </p>
            </div>
          </div>
            <img src="../src/imgs/camilla 1.jpg" alt="Foto Camilla" />
        </div>
      </div>
    </>
  );
};
