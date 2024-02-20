import React from "react";
import glass from "../assets/glass.png";
import w1 from "../assets/w1.jpg";

const News = () => {
  return (
    <div className="mt-[150px] w-full">
      <div className="max-w-[80%] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <img src={glass} alt="" />
          <h3
            className="text-3xl text-black font-bold py-2 font-sans capitalize
          "
          >
            latest news
          </h3>
        </div>
        <div className="card-container">
          <div className="w-[33%]">
            <div>
              <img src={w1} alt="" />
              <div>
                <h5>6</h5>
                <h5>march</h5>
              </div>
            </div>

            <div>
              <h4>viderer voluptatum te eum</h4>
              <p>
                Ei has mutat solum. Fugit atomorum efficiantur an vitm, te...
              </p>
              <div>views 865</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
