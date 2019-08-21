import React, { Component } from "react";
import Home from "./Component/Home";
import Footer from "./Component/footer/Footer";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "./Component/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import View from "./Component/View";

class App extends Component {
  componentDidMount = async () => {
    const res = await axios("/home");
    const data = await res.data;
    this.props.dispatch({
      type: "movieList",
      payload: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/view" component={View} />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
function getsentdata(state) {
  return {
    movies: state.movies
  };
}
export default connect(getsentdata)(App);
