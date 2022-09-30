import React, { useState } from "react";
import classes from "./Faq.module.css";
import LayoutSections from "../layout/LayoutSections/LayoutSections";
import ImgGorila from "../../assets/gorilla.png";

const questions = [
  {
    question: "O que é um Ecomuseum?",
    answer:
      "Um ecomuseume é um lugar voltado para o bem-estar dos animais, que desenvolve projetos de pesquisa para a conservação de espécies e possui também como foco a educação ambiental dos visitantes.",
    id: "p1",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer: "funciona todos os dias de 09h às 17h, sendo 16h o último horário de entrada.",
    id: "p2",
  },
  {
    question: "Qual o preço dos ingressos?",
    answer:
      "O valor do ingresso para a entrada é de R$46 e a meia-entrada R$23",
    id: "p3",
  },
  {
    question: "O Ecomuseum é um lugar acessível?",
    answer:
      "Sim! Seguindo todas as diretrizes vigentes, nosso espaço foi projetado para ser totalmente acessível e   inclusivo.",
    id: "p4",
  },
  {
    question: "Tem limite de tempo para visitar?",
    answer: "Não! Você pode aproveitar esse novo conceito de zoológico por quanto tempo quiser, respeitando o horário de funcionamento.",
    id: "p5",
  },
];

const Faq = () => {
  const [answerToShown, setAnswerToShown] = useState(questions[0].id);

  const showAnswerHandler = (id) => {
    setAnswerToShown(id);
  };

  return (
    <section className={classes.section}>
      <LayoutSections subtitle="Perguntas frequentes" title="FAQ">
        <ul className={classes.questionList}>
          {questions.map((q) => (
            <li key={q.id}>
              <button
                onClick={() => showAnswerHandler(q.id)}
                className={answerToShown === q.id ? classes.visible : ""}
              >
                {q.question}
              </button>
              <p
                className={`${classes.answer} ${
                  answerToShown === q.id ? classes.visible : ""
                }`}
              >
                {q.answer}
              </p>
            </li>
          ))}
        </ul>
        <a href="/" className="btn-verde">
          Todos as perguntas
        </a>
      </LayoutSections>
      <div className={classes.imgContainer}>
        <img src={ImgGorila} alt="gorila" />
      </div>
    </section>
  );
};

export default Faq;
