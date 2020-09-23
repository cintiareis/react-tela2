import React from "react";
import { Component } from "react";
import Header from "../../components/Header/index";

export default class Eu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eu: "Cíntia Reis..."
    };
  }

  render() {
    return (
      <div id="text">
        <Header />
        <h1 id="principal">Eu sou {this.state.eu}</h1>
        <p>
          Aos 15 anos tive a primeira oportunidade de mexer com a programação,{" "}
          <br />
          desde então, procuro me desafiar e expandir os meus conhecimentos.
          <br />
          Front-end ( área que estou ) me chamou muita atenção. <br /> A beleza
          e a estética de um trabalho realmente bem feito é o que o pessoal de
          Front-end entendem. <br /> O visual é realmente incrível! <br /> Me
          fez reconhecer, admirar e perceber as minhas habilidades criativas.
          <br /> Como qualquer pessoa, gosto muito de ler, viajar, assistir
          séries, mexer nas redes sociais, conversar por vídeo <br /> e enviar
          mensagens como por exemplo : "Feliz aniversário, você é especial",
          <br /> é aí onde percebo que a programação está em tudo. <br /> Ela
          sempre estará comigo por onde quer que eu vá.
        </p>
      </div>
    );
  }
}
