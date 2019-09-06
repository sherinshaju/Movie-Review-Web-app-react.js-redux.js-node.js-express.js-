import React, { useEffect, useState } from "react";
import css from "./sidebar.scss";
import { useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";

function Sidebar() {
  let [upcoming, setupcoming] = useState([]);
  let movieDate = useSelector(state => state.counterReducer.movies[2]);

  useEffect(() => {
    const getNewdata = async () => {
      let res = await axios.get("/upcoming/data");
      let data = await res.data;
      setupcoming(data);
    };
    getNewdata();
  }, []);

  console.log(upcoming);
  return (
    <React.Fragment>
      <div className="side-wrapper mt-5 mb-2">
        <div>
          <h6>movie of month</h6>
        </div>
        <div className="rounded image-wrapper">
          <img src={movieDate.coverImage} alt="sd" className="img-fluid"></img>
        </div>
        <div className="mt-2">
          <h6>{movieDate.name}</h6>
        </div>
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={movieDate.rating}
          />
        </div>
        <div>
          <span>{movieDate.cover}</span>
        </div>
      </div>
      <div className="upcoming-movie">
        <div className="d-flex justify-content-between">
          <h6>Upcoming Movies</h6>
          <span>see all</span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sidebar;
