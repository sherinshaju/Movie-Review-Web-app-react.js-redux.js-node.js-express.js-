import React, { useEffect } from "react";
import css from "./banner.scss";
import { useSelector } from "react-redux";
import Review from "../review/Review";

function ViewBanner() {
  let viweData = useSelector(state => state.counterReducer.viewMovie[0]);

  console.log(viweData);
  return (
    <React.Fragment>
      <div className="view-wrapper py-3">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <span>Movies</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {viweData.name}
            </li>
          </ol>
        </nav>
        <div className="banner-wrapper">
          <img
            src={viweData.coverImage}
            alt="d"
            className="img-fluid"
            width="100%"
          ></img>
        </div>
        <div className="container">
          <div className="row mainname-wrapper">
            <div className="col-md-3">
              <div className="d-flex align-items-center h-100 ">
                <h5 className="mb-0">{viweData.name}</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center h-100 ">
                <p className="font-600 mb-0"> General :</p>
                <p className="text-gray ml-2 mb-0"> {viweData.cover}</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex align-items-center h-100 ">
                <p className="font-600 mb-0"> Rating :</p>
                <p className="text-warning ml-2 mb-0"> {viweData.rating} ⭐</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center h-100 ">
                <button className="btn btn-outline-info">
                  Watch on Youtube
                </button>
              </div>
            </div>
          </div>
          <Review viweData={viweData} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ViewBanner;
