import React, { useState, useEffect } from "react";
import css from "./review.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Review(props) {
  const dispatch = useDispatch();

  let [name, setName] = useState("");
  let [comment, setComment] = useState("");
  let [add, addData] = useState("");
  let commentView = useSelector(state => state.view.comment);

  let handleName = e => {
    setName(e.target.value);
  };

  let handleComment = e => {
    setComment(e.target.value);
  };

  let handleSubmit = event => {
    event.preventDefault();

    let data = {
      id: props.viweData.id,
      name: name,
      comment: comment
    };
    axios({
      method: "post",
      url: "/comment/addcomment",
      data: data
    }).then(res => {
      addData(res.data);
    });
    setTimeout(function() {
      addData("");
    }, 1000);
    setName("");
    setComment("");
    displayApi();
  };

  const displayApi = async () => {
    let res = await axios(`/comment/getcomment/${props.viweData.id}`);
    let resData = await res.data;
    dispatch({
      type: "comment",
      payload: resData
    });
    let scrollBottom = document.getElementById("scrolldiv");
    scrollBottom.scrollTop = scrollBottom.scrollHeight;
  };

  useEffect(() => {
    let getdata = async () => {
      let res = await axios(`/comment/getcomment/${props.viweData.id}`);
      let resData = await res.data;
      // console.log(resData);
      dispatch({
        type: "comment",
        payload: resData
      });
      let scrollBottom = document.getElementById("scrolldiv");
      scrollBottom.scrollTop = scrollBottom.scrollHeight;
    };
    getdata();
  }, [dispatch]);

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
          <div className="comment-wrapper  mt-5" id="scrolldiv">
            {commentView.map((comment, key) => (
              <div className="message-inner" key={key}>
                <span>{comment.name}</span>
                <p>{comment.comment}</p>
              </div>
            ))}
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
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Comment"
              rows="3"
              onChange={handleComment}
              value={comment}
            ></textarea>
          </div>

          {add.length !== 0 ? (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              {add}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ) : null}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Review;
