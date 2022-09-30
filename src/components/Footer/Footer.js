import React from "react";
import MediasLink from "../layout/MediaLinks/MediaLink";
import Logo from "../layout/Logo/Logo";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <p className={classes.title}>Menu</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Animais</a>
            </li>
            <li>
              <a href="/">Atividades</a>
            </li>
            <li>
              <a href="/">Mapa</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Compre seu ingresso</a>
            </li>
          </ul>
        </nav>

        <address>
          <div className={classes.endereco}>
            <p className={classes.title}>Endereço</p>
            <span>São Paulo - SP</span>
            <span>São Paulo 12 </span>
            <span>12345-678</span>
          </div>
        </address>

        <address>
          <div>
            <p className={classes.title}>Entre em contato</p>
            <span>+00 1234-5678</span>
            <span className={classes.email}>contato@email.com</span>
            <MediasLink />
          </div>
        </address>

        <Logo className={classes.logo} />
      </div>
      <div className={classes.madeby}>
        Projeto feito por{" "}
        <a href="https://github.com/edersonpaixao21">Ederson Paixão</a>
      </div>
    </footer>
  );
};

export default Footer;
