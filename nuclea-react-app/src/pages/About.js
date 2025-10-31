
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
        <div class="conteudo">

            <div class="conteudo1-1">
                <img src="/imagens/imagem-qm-somos.png" alt="" id="ImagemInicial" />
            </div>

            <div class="conteudo1">
                <div class="texto-black">
                    <h1 id="quem-somos">QUEM SOMOS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit. Laborum,<br />
                        consequuntur? Fugit, sequi. Ratione, quasi! Nostrum, sapiente! Possimus, atque! Maxime,<br />
                        odio! Odio nobis doloribus, totam rem esse excepturi magnam.
                    </p>
                </div>
                <img src="/imagens/logo-branca.png" id="imagemLogo"/>
            </div>


            <h1 id="nossos-valores">NOSSOS VALORES</h1>

            <div class="graca-prt">
                <h3>GRAÇA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit. Laborum,<br />
                    consequuntur? Fugit, sequi. Ratione, quasi! Nostrum, sapiente! Possimus, atque! Maxime,<br />
                    odio! Odio nobis doloribus, totam rem esse excepturi magnam.
                </p>
            </div>

            <div class="amor-prt">
                <h3>AMOR</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit. Laborum,<br />
                    consequuntur? Fugit, sequi. Ratione, quasi! Nostrum, sapiente! Possimus, atque! Maxime,<br />
                    odio! Odio nobis doloribus, totam rem esse excepturi magnam.
                </p>
            </div>

            <div class="paz-prt">
                <h3>PAZ</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit. Laborum,<br />
                    consequuntur? Fugit, sequi. Ratione, quasi! Nostrum, sapiente! Possimus, atque! Maxime,<br />
                    odio! Odio nobis doloribus, totam rem esse excepturi magnam.
                </p>
            </div>

            <div class="conteudo1-1">
                <img src="/imagens/img-aguia.png" alt="" id="ImagemInicial" />
                <div class="aguia-significado">
                    <h2>SIGNIFICADO DA ÁGUIA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit. Laborum,<br />
                        consequuntur? Fugit, sequi. Ratione, quasi! Nostrum, sapiente! Possimus, atque! Maxime,<br />
                        odio! Odio nobis doloribus, totam rem esse excepturi magnam.
                    </p>
                    <br />
                    <ol class="txt-lista">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
