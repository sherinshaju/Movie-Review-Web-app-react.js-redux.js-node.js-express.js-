import React from "react";

function Review(props) {
  console.log(props.viweData);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Review;
