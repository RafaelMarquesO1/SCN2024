
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="conteudo-principal">
        <div className="banner-video">
          <video src="/videos/videobanner.mp4" autoPlay muted loop className="video-banner"></video>
        </div>
        <div className="conteudo-botoes">
          <div className="botoes-principais">
            <button className="bto-abrir anm-bto anm-bto-delay-1">QUEM SOMOS</button>
            <button className="bto-abrir anm-bto anm-bto-delay-2">NOSSOS CULTOS</button>
            <button className="bto-abrir anm-bto anm-bto-delay-3">DOE AGORA</button>
          </div>
        </div>
      </div>

      <div className="titulo-section-1">
        <h2>ACOMPANHE AO VIVO</h2>
      </div>

      <div className="video-aovivo">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/live_stream?channel=UC4b23n_8u93b8uMC44n_AFQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>

      <div className="banner-section-2">
        <img src="/imagens/banner-section-2.png" alt="Banner Section 2" className="imagem-banner-section-2" />
        <button className="bto-section-2">NOSSOS MINISTERIOS</button>
      </div>

      <div className="localizacao">
        <h2>NOSSA LOCALIZAÇÃO</h2>
      </div>

      <div className="mapa">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.912629037302!2d-46.56444962534571!3d-23.64335816480836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43a903031a69%3A0x72494585501867c8!2sComunidade%20Crist%C3%A3%20NUCLEA!5e0!3m2!1spt-BR!2sbr!4v1714416304899!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="anime-se">
        <div className="background-anime-se">
          <img src="/imagens/anime-se.png" alt="" className="imagem-anime-se"/>
          <button className="bto-anime-se">FOTOS DOS CULTOS</button>
        </div>
      </div>

      <div className="frase-biblica">
        <p>Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.</p>
        <h3>João 3:16</h3>
      </div>
    </div>
  );
};

export default Home;
