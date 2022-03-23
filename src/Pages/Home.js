import React from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />

      <div className="container">
        <div className="home-section">
          <div className="left">
            <h3>let's creat new Future !</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              quidem excepturi ipsa ad ut nam ipsam harum impedit at architecto,
              itaque a, animi facere dolor laudantium accusamus quis et unde?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              quas commodi odit harum tempora optio praesentium officiis sunt
              veritatis veniam, nisi distinctio cupiditate, consectetur
              expedita.
            </p>

            <button className="btn1">Join Now</button>
          </div>
          <div className="right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
