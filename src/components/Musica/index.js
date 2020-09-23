import React from "react";
import { Component } from "react";
import Header from "../../components/Header/index";

export default class Musica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palavraChave: "Felicidade"
    };
  }

  render() {
    return (
      <div id="container">
        <Header />
        <div id="titulo">
          <h1 id="principal">Peça... {this.state.palavraChave}</h1>
        </div>
        <div id="letra">
          <p>
            Hoje vamos desejar o bem <br />
            Sem olhar a quem <br />
            Acabar com a solidão <br />
            No ato de estender a mão <br />
            Peça tudo o que você quiser <br />
            Acredite na sua fé <br />
            Paz, saúde, vigor <br />
            Sucesso, alegria, esperança, amor <br />
            <br />
            Aproveite todas sensações <br />
            Sinta a chuva te molhar <br />
            E quando o Sol chegar <br />
            Deixa esquentar <br />
            Tenha dentro do seu coração <br />
            Pureza e verdade <br />
            O que você transmitir <br />
            Volta com intensidade <br />
            <br />
            Quando não souber o que pedir <br />
            Peça felicidade <br />
            Quando não souber o que doar <br />
            Doe sua metade <br />
            E depois vai sentir a energia <br />
            E satisfação de ver nascer um novo dia <br />
            <br />
            Aproveite todas sensações <br />
            Sinta a chuva te molhar <br />
            E quando o Sol chegar <br />
            Deixa esquentar <br />
            Tenha dentro do seu coração <br />
            Pureza e verdade <br />
            O que você transmitir <br />
            Volta com intensidade <br />
            <br />
            Quando não souber o que pedir <br />
            Peça felicidade <br />
            Quando não souber o que doar <br />
            Doe sua metade <br />
            E depois vai sentir a energia <br />
            E satisfação de ver nascer um novo dia <br />
            <br />
            Peça felicidade
          </p>
        </div>
      </div>
    );
  }
}
