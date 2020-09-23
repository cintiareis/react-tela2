import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav class="menu">
          <Link to="/home"> Home </Link>
          <Link to={"/musica"}> Visualizar letra da Música</Link>
          <br />
          <Link to={"/eu"}> Quem sou eu... </Link> <br />
        </nav>
      </div>
    );
  }
}
