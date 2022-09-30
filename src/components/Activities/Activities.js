import React from "react";
import LayoutSections from "../layout/LayoutSections/LayoutSections";
import classes from "./Activities.module.css";
import ImgActivity1 from "../../assets/at-1.jpg";
import ImgActivity2 from "../../assets/at-2.jpg";
import ImgActivity3 from "../../assets/at-3.jpg";
import ImgActivity4 from "../../assets/at-4.jpg";
import Slider from "../layout/Slider/Slider";

const activities = [
  {
    src: ImgActivity1,
    id: "at1",
    name: "Escalada",
    descricao:
      "Escalada é o desporto ou a atividade de escalar paredes de rocha, especialmente com o auxílio de cordas e equipamentos especiais.",
  },
  {
    src: ImgActivity2,
    id: "at2",
    name: "Restaurante",
    descricao:
      "Conheça nossos produtos naturais e orgânicos e viva uma experiência gastronômica incrível.",
  },
  {
    src: ImgActivity3,
    id: "at3",
    name: "Espaço kids",
    descricao:
      "Espaço Kids conta com uma programação recheada de brincadeiras e muita diversão para os pequenos.",
  },
  {
    src: ImgActivity4,
    id: "at4",
    name: "Animais",
    descricao:
      "Descubra quais são as principais características dos animais, as diferenças entre vertebrados e invertebrados, bem como entre selvagens e domésticos.",
  },
];

const Activities = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossas atividades"
        
      >
        <p className={classes.txt}>
          Que tal complementar sua experiência com atividades extras?
        </p>
        <a href="/" className="btn-preto">
          Saiba mais
        </a>
      </LayoutSections>
      <Slider>
        {activities.map((activity) => (
          <li key={activity.id} className={classes.itemActivity}>
            <img src={activity.src} alt={activity.name} />
            <h3>{activity.name}</h3>
            <p>{activity.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Activities;
