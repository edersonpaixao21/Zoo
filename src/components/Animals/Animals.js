import React from "react";
import classes from "./Animals.module.css";
import ImgAnimal1 from "../../assets/an-1.jpg";
import ImgAnimal2 from "../../assets/an-2.jpg";
import ImgAnimal3 from "../../assets/an-3.jpg";
import ImgAnimal4 from "../../assets/an-4.jpg";
import ImgAnimal5 from "../../assets/an-5.jpg";
import LayoutSections from "../layout/LayoutSections/LayoutSections";
import Slider from "../layout/Slider/Slider";

const animals = [
  {
    src: ImgAnimal1,
    id: "anima1",
    especie: "iguana",
    descricao:
      "Iguana é um gênero de réptil da família Iguanidae. As espécies deste gênero ocorrem em regiões tropicais da América Central, América do Sul e Caribe.",
  },
  {
    src: ImgAnimal2,
    id: "anima2",
    especie: "leão",
    descricao:
      "O leão é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae. A espécie é atualmente encontrada na África subsaariana e na Ásia.",
  },
  {
    src: ImgAnimal3,
    id: "anima3",
    especie: "Flamingo",
    descricao:
      "Flamingo é uma ave pertencente à família Phoenicopteridae da ordem Phoenicopteriformes. Anteriormente pertencia a ordem Ciconiiformes.",
  },
  {
    src: ImgAnimal4,
    id: "anima4",
    especie: "Rinoceronte",
    descricao:
      "Os Rinocerontes são grandes mamíferos perissodáctilos da família Rhinocerontidae, que ocorrem na África e na Ásia.",
  },
  {
    src: ImgAnimal5,
    id: "anima5",
    especie: "mico-leão-dourado",
    descricao:
      "O mico-leão-dourado é um primata endêmico do Brasil, da família Callitrichidae e gênero Leontopithecus. Ocorre exclusivamente na Mata Atlântica brasileira.",
  },
];

const Animals = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="Nossos animais"
        subtitle="O que você irá encontrar aqui"
        className={classes.content}
      >
        <p>
          Confira aqui o que você, sua família e amigos irão ver nessa incrível transformação:
        </p>

        <a href="/" className={`btn-preto ${classes.link}`}>
          Todos os animais
        </a>
      </LayoutSections>
      <Slider className={classes.slider}>
        {animals.map((animal) => (
          <li key={animal.id} className={classes.itemAnimal}>
            <img src={animal.src} alt={animal.especie} />
            <h3>{animal.especie}</h3>

            <p>{animal.descricao}</p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default Animals;
