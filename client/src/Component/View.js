import React, { Component } from "react";
import ViewBanner from "./viewmovie/ViewBanner";

class View extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <ViewBanner />
        </div>
      </React.Fragment>
    );
  }
}
export default View;
