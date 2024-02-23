import React from "react";
import glass from "../assets/glass.png";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import Slider from "react-slick";
``;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="mt-[150px] w-full">
      <div className="max-w-[85%] mx-auto">
        <div className="flex items-center justify-center flex-col">
          <img src={glass} alt="" />
          <h3
            className="text-3xl text-black font-bold py-2 font-sans capitalize
          "
          >
            latest news
          </h3>
        </div>
        <div className="card-container mt-5">
          <Slider {...settings}>
            <div className=" bg-slate-100 p-4 rounded-md">
              <div className="relative">
                <img src={w1} alt="" className="rounded-md" />
                <div className="absolute bottom-[-25px] left-[50%] translate-x-[-50%] bg-slate-300 flex items-center justify-center flex-col rounded-full w-[65px] h-[65px] p-3 font-medium capitalize">
                  <h5>6</h5>
                  <h5>march</h5>
                </div>
              </div>

              <div className="pt-8 text-center capitalize">
                <h4 className="text-[19px] font-medium my-2">
                  viderer voluptatum te eum
                </h4>
                <p className="text-[17px] font-sans">
                  Ei has mutat solum. Fugit atomorum efficiantur an vitm, te...
                </p>
                <div className="my-2 font-medium">views 865</div>
              </div>
            </div>
            <div className=" bg-slate-100 p-4 rounded-md">
              <div className="relative">
                <img src={w2} alt="" className="rounded-md" />
                <div className="absolute bottom-[-25px] left-[50%] translate-x-[-50%] bg-slate-300 flex items-center justify-center flex-col rounded-full w-[65px] h-[65px] p-3 font-medium capitalize">
                  <h5>6</h5>
                  <h5>march</h5>
                </div>
              </div>

              <div className="pt-8 text-center capitalize">
                <h4 className="text-[19px] font-medium my-2">
                  viderer voluptatum te eum
                </h4>
                <p className="text-[17px] font-sans">
                  Ei has mutat solum. Fugit atomorum efficiantur an vitm, te...
                </p>
                <div className="my-2 font-medium">views 865</div>
              </div>
            </div>
            <div className=" bg-slate-100 p-4 rounded-md">
              <div className="relative">
                <img src={w3} alt="" className="rounded-md" />
                <div className="absolute bottom-[-25px] left-[50%] translate-x-[-50%] bg-slate-300 flex items-center justify-center flex-col rounded-full w-[65px] h-[65px] p-3 font-medium capitalize">
                  <h5>6</h5>
                  <h5>march</h5>
                </div>
              </div>

              <div className="pt-8 text-center capitalize">
                <h4 className="text-[19px] font-medium my-2">
                  viderer voluptatum te eum
                </h4>
                <p className="text-[17px] font-sans">
                  Ei has mutat solum. Fugit atomorum efficiantur an vitm, te...
                </p>
                <div className="my-2 font-medium">views 865</div>
              </div>
            </div>
            <div className=" bg-slate-100 p-4 rounded-md">
              <div className="relative">
                <img src={w4} alt="" className="rounded-md" />
                <div className="absolute bottom-[-25px] left-[50%] translate-x-[-50%] bg-slate-300 flex items-center justify-center flex-col rounded-full w-[65px] h-[65px] p-3 font-medium capitalize">
                  <h5>6</h5>
                  <h5>march</h5>
                </div>
              </div>

              <div className="pt-8 text-center capitalize">
                <h4 className="text-[19px] font-medium my-2">
                  viderer voluptatum te eum
                </h4>
                <p className="text-[17px] font-sans">
                  Ei has mutat solum. Fugit atomorum efficiantur an vitm, te...
                </p>
                <div className="my-2 font-medium">views 865</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
