import React from "react";
import countryData from "../api/CountryData.json";

const About = () => {
  return (
    <section className=" section-about container">
      <h2 className="container-title">About Countries</h2>

      <div className="gradient-cards">
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital : </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population : </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">InterestingFact : </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
