
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div>
        <div class="conteudo">
            <h1 id="cultos">NOSSOS CULTOS</h1>

            <div class="main">
                <div class="kard">
                    <img src="/imagens/culto-principal.png" />
                    <h1>CULTO DE CELEBRAÇÃO</h1>
                    <h2>DOMINGO ÁS 18H00</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button class="bto"><a href="#">VER MAIS</a></button>
                </div>

                <div class="kard">
                    <img src="/imagens/culto-jovens.png" />
                    <h1>NÚCLEO DE ADOLESCENTES E JOVENS</h1>
                    <h2>SÁBADO ÁS 19H30</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button class="bto"><a href="#">VER MAIS</a></button>
                </div>
            </div>

            <div class="main">
                <div class="kard">
                    <img src="/imagens/tarde-bencao.png" />
                    <h1>TARDE DA BENÇÃO</h1>
                    <h2>QUARTA-FEIRA ÁS 14H30</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button class="bto"><a href="#">VER MAIS</a></button>
                </div>

                <div class="kard">
                    <img src="/imagens/culto-ensino.png" />
                    <h1>CULTO DE ENSINO</h1>
                    <h2>QUINTA-FEIRA ÁS 19H30</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button class="bto"><a href="#">VER MAIS</a></button>
                </div>
            </div>
        </div>

        <div class="Ministerios">
            <center>
                <h1 id="titulo-pagina">MINISTÉRIOS</h1>
            </center>

            <div class="Min-Pastoral">
                <div id="txt-MinPastoral">
                    <h2 id="tt-min01">MINISTÉRIO PASTORAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, architecto! Nesciunt tempora, quasi, quos cumque, excepturi hic corporis eaque necessitatibus et ea ad dolor! Hic magnam recusandae ad dignissimos a?</p>
                    <div class="palavra">
                        <p>"Pastoreiem o rebanho de Deus que está aos seus cuidados. Olhem por ele, não por obrigação, mas de boa vontade, como Deus quer. Não façam isso por ganância, mas com o desejo de servir."</p>
                        <p class="palavra-versiculo">1 Pedro 5:2</p>
                    </div>
                </div>
                <img src="/imagens/perfil-pr.jpeg" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Services;
