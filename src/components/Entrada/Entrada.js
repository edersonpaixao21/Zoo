import React from "react";
import classes from "./Entrada.module.css";
import Logo from "../layout/Logo/Logo";
import { ReactComponent as IconPin } from "../../assets/pin.svg";

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <header className={classes.header}>
        <Logo className={classes.logo} />
        <a className="btn-verde" href="/">
          Faça uma doação
        </a>
      </header>

      <div className={classes.entradaContainer}>
        <div className={classes.titleAndTexts}>
          <p className={classes.description}>
            Bem-vindo a um novo conceito de zoológico.
          </p>

          <h1>Escreva esse novo capítulo na história junto com a gente!</h1>

          <a href="/" className="btn-verde">
            Compre o seu ingresso
          </a>
        </div>

        <div className={classes.aside}>
          <ul>
            <li>
              <span>+2500</span>
              <p>Animais</p>
            </li>
            <li>
              <span>+315</span>
              <p>Espécies</p>
            </li>
            <li>
              <span>+20</span>
              <p>espaços de lazer</p>
            </li>
          </ul>

          <address>
            <span>
              São Paulo - 12 <IconPin />
            </span>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Entrada;
