
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
        <div class="cont01">
            <h1 id="titulo-pagina">FALE CONOSCO</h1>
            <h2 id="subtitulo-pagina">Lorem ipsum dolor sit amet</h2>
        </div>

        <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>NÚCLEA</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <div id="footer_social_media">
                    <a href="#" class="footer-link" id="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" class="footer-link" id="facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" class="footer-link" id="youtube">
                        <i class="fa-brands fa-youtube"></i>
                    </a>

                    <a href="#" class="footer-link" id="spotify">
                        <i class="fa-brands fa-spotify"></i>
                    </a>
                </div>
            </div>
            
            <ul class="footer-list">
                <li>
                    <h5>Navegação</h5>
                </li>
                <li>
                    <a href="#" class="footer-link">Início</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Sobre nós</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Cultos</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Ministérios</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Eventos</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Contato</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h5>Contribuição</h5>
                </li>
                <li>
                    <p>Banco Bradesco</p>
                </li>
                <li>
                    <p>Agência: 0000</p>
                </li>
                <li>
                    <p>Conta: 00000-0</p>
                </li>
                <li>
                    <p>PIX: 00.000.000/0001-00</p>
                </li>
            </ul>

            <div id="footer_subscribe">
                <h3>Inscreva-se</h3>

                <p>
                    Coloque seu e-mail para se registrar em nossa newsletter
                </p>

                <div id="input_group">
                    <input type="email" id="email"></input>
                    <button>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="footer_copyright">
            &#169
            2024 all rights reserved
        </div>
    </footer>
    </div>
  );
};

export default Contact;
