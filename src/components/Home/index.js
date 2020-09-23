import React, { Component } from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import Melim from "../../assets/imagem/melim.jpg";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Melim</h2>
        <br />
        <img src={Melim} alt="imagem" id="imagem" />
      </div>
    );
  }
}
