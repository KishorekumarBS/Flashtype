import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection />
        <Footer />
      </div>
    );
  }
}
