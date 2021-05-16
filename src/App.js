import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/Card-List/Card-List.component";
import Nav from "./NavBar";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      series: [],
      searchField: "",
      page: 1,
    };
  }

  componentDidMount() {
    /* Using Multiple Fetch Statements Within componentDidMount */
    Promise.all([
      fetch(
        `https://www.episodate.com/api/most-popular?page=${this.state.page}`
      ).then((response) => response.json()),
      fetch(
        "https://www.episodate.com/api/search?q=Breaking%20Bad&page=1"
      ).then((response) => response.json()),
    ]).then(([urlone, urltwo]) =>
      this.setState({ series: [...urlone.tv_shows, ...urltwo.tv_shows] })
    );
  }

  render() {
    const { series, searchField } = this.state;
    const filterSeries = series.filter((serie) =>
      serie.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Nav
          handelchange={(e) => this.setState({ searchField: e.target.value })}
        ></Nav>

        <Button
          onClick={() => {
            let pages = this.state.page - 1;
            fetch(`https://www.episodate.com/api/most-popular?page=${pages}`)
              .then((response) => response.json())
              .then((user) => this.setState({ series: user.tv_shows }));
          }}
          variant="outlined"
          color="primary"
        >
          PREV
        </Button>
        <Button
          onClick={() => {
            let pages = this.state.page + 1;
            fetch(`https://www.episodate.com/api/most-popular?page=${pages}`)
              .then((response) => response.json())
              .then((user) => this.setState({ series: user.tv_shows }));
          }}
          variant="outlined"
          color="secondary"
        >
          NEXT
        </Button>

        <CardList series={filterSeries} />
        <button
          onClick={() => {
            let pages = this.state.page - 1;
            fetch(`https://www.episodate.com/api/most-popular?page=${pages}`)
              .then((response) => response.json())
              .then((user) => this.setState({ series: user.tv_shows }));
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            let pages = this.state.page + 1;
            fetch(`https://www.episodate.com/api/most-popular?page=${pages}`)
              .then((response) => response.json())
              .then((user) => this.setState({ series: user.tv_shows }));
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
