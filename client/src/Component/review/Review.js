import React from "react";
import css from "./review.scss";

function Review(props) {
  // console.log(props.viweData);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center h-100 mb-3">
            <p className="font-600 mb-0"> Directed by :</p>
            <p className="text-gray ml-2 mb-0"> {props.viweData.name}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex align-items-center h-100 ">
            <p className="font-600 mb-0"> Description :</p>
            <p className="text-gray ml-2 mb-0"> {props.viweData.des}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex align-items-center h-100 mt-4">
            <h4 className="font-600 mb-0">Review Of Movies</h4>
          </div>
        </div>
        <div className="col-md-12">
          <div className="comment-wrapper  mt-5">
            <div className="message-inner">
              <p>dsfa</p>
            </div>
            <div className="message-inner">
              <p>
                safdsgafghafhadhadhdhahdhadhfasafdsgafghafhadhadhdhahdhadhfasafdsgafghafhadhadhdhahdhadhfa
              </p>
            </div>
            <div className="message-inner">
              <p>adggfg</p>
            </div>
            <div className="message-inner">
              <p>sgagaggagf</p>
            </div>
            <div className="message-inner">
              <p>adfhafhfhfhdfdfh</p>
            </div>
            <div className="message-inner">
              <p>dsadfhadhfadhfsfdfa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="d-flex align-items-center h-100 mt-4 mb-3">
          <h4 className="font-600 mb-0">Comment Review</h4>
        </div>
      </div>
      <div className="col-md-8">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your Comment"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Review;
