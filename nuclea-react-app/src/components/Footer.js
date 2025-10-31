
import React from 'react';
import './Footer.css';

const Footer = () => {
  const enviarEmail = () => {
    window.location.href = "mailto:contato@comunidadenuclea.com.br";
  };

  return (
    <footer>
      <div id="footer_content">
        <div id="footer_contacts">
          <h1>COMUNIDADE NUCLEA</h1>
          <p>Siga-nos em nossas redes sociais</p>
          <div id="footer_social_media">
            <a href="https://www.instagram.com/comunidadenuclea/" className="footer-link" id="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/comunidadenuclea/?locale=pt_BR" className="footer-link" id="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@ComunidadeNUCLEA" className="footer-link" id="youtube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://open.spotify.com/show/0ppRBiliCFTpVlllVfUkbL?si=6af8fbe449f04519" className="footer-link" id="spotify">
              <i className="fa-brands fa-spotify"></i>
            </a>
          </div>
        </div>
        <ul className="footer-list">
          "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz."
          <h5>Números 6:24-26</h5>
        </ul>
        <ul className="footer-list">
        </ul>
        <div id="footer_subscribe">
          <h3>QUER RECEBER ORAÇÃO?</h3>
          <p>
            Envie para nós seu propósito por email para receber oração.
            Um jeito simples e fácil!
          </p>
          <div id="input_group">
            <input type="email" id="email" placeholder="Seu e-mail" />
            <button onClick={enviarEmail}>
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="footer_copyright">
        &#169
        2025 Comunidade Nuclea
      </div>
    </footer>
  );
};

export default Footer;
