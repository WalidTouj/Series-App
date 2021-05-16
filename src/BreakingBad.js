import React, { Component } from "react";
import { CardListBrBa } from "./component/Card-List/CardListBrBa.component";

class BreakingBad extends Component {
  constructor() {
    super();
    this.state = {
      charactersBrBa: [],
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((users) => this.setState({ charactersBrBa: users }));
  }

  render() {
    return (
      <div>
        <CardListBrBa charactersBrBa={this.state.charactersBrBa} />
      </div>
    );
  }
}

export default BreakingBad;
