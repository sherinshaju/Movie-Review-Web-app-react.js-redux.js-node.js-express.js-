import React from "react";

function Footer() {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bg-dark row py-4  justify-content-center">
              <p className="text-white">&copy; copyright by Sherinshaju</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
