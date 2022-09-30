import React from "react";
import LayoutSections from "../layout/LayoutSections/LayoutSections";
import classes from "./Valores.module.css";
import ImgGiraffe from "../../assets/giraffe.png";

const Valores = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossos valores"
        subtitle="Compre aqui seu ingresso avulso e evite filas."
        className={classes.content}
      >
        <a href="/" className="btn-verde">
          R$ 46,00
        </a>
      </LayoutSections>
      <div className={classes.img}>
        <img src={ImgGiraffe} alt="girafa" />
        <div className={classes.detail1}></div>
      </div>
    </section>
  );
};

export default Valores;
