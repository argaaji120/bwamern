import React from "react";
import Fade from "react-reveal/Fade";

import HeroImage from "assets/images/img-hero.jpg";
import HeroImageFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <Fade bottom>
              <h1 className="font-weight-bold line-height-1 mb-3">
                Forget Busy Work, <br />
                Start Next Vacation
              </h1>
            </Fade>
            <Fade bottom delay={300}>
              <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                We provide what you need to enjoy your <br /> holiday with family. Time to make another memorable moments.
              </p>
            </Fade>
            <Fade bottom delay={600}>
              <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                Show Me Now
              </Button>
            </Fade>
            <Fade bottom delay={500}>
              <div className="row" style={{ marginTop: 80 }}>
                <div className="col-auto" style={{ marginRight: 35 }}>
                  <img src={IconTraveler} alt={`${props.data.travelers} travelers`} width="36" height="36" />
                  <h6 className="mt-3">
                    {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
                  </h6>
                </div>

                <div className="col-auto" style={{ marginRight: 35 }}>
                  <img src={IconTreasure} alt={`${props.data.treasures} treasures`} width="36" height="36" />
                  <h6 className="mt-3">
                    {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasures</span>
                  </h6>
                </div>

                <div className="col-auto">
                  <img src={IconCities} alt={`${props.data.cities} cities`} width="36" height="36" />
                  <h6 className="mt-3">
                    {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
                  </h6>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <Fade bottom delay={400}>
                <img
                  src={HeroImage}
                  alt="Hero"
                  className="img-fluid position-absolute"
                  style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                />

                <img
                  src={HeroImageFrame}
                  alt="Hero Frame"
                  className="img-fluid position-absolute"
                  style={{ margin: "0 -15px -15px 0" }}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
