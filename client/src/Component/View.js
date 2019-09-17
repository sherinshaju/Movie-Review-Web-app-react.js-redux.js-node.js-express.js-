import React, { Component } from "react";
import ViewBanner from "./viewmovie/ViewBanner";
import Sidebar from "./sidebar/Sidebar";

class View extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <ViewBanner />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default View;
