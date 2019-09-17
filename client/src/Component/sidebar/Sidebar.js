import React, { useEffect } from "react";
import css from "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";

function Sidebar() {
  let movieDate = useSelector(state => state.counterReducer.movies[2]);
  let upcoming = useSelector(state => state.counterReducer.upcoming);
  let dispatch = useDispatch();
  useEffect(() => {
    const getNewdata = async () => {
      let res = await axios.get("/upcoming/data");
      let data = await res.data;
      dispatch({
        type: "upcomingMovie",
        payload: data
      });
    };
    getNewdata();
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="side-wrapper mt-5 mb-2">
        <div>
          <h6>movie of month</h6>
        </div>
        <div className="rounded image-wrapper">
          <img src={movieDate.coverImage} alt="sd" className="img-fluid" />
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
        <div className="d-flex justify-content-between flex-column">
          <div className="d-flex justify-content-between">
            <h6>Upcoming Movies</h6>
            <span>see all</span>
          </div>
          {upcoming.map(upcomingMv => (
            <div
              className="upcomming-wrapper d-flex justify-content-between align-items-center mt-3"
              key={upcomingMv.id}
            >
              <div>
                <img
                  src={upcomingMv.image}
                  alt="sd"
                  width="64px"
                  height="64px"
                  className="image"
                ></img>
              </div>
              <div>
                <p className="heading mb-0">{upcomingMv.name}</p>
                <p className="release mb-0">
                  Release Date : {upcomingMv.releasedata}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sidebar;
