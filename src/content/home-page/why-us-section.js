/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

const counters = [
  { title: "Clients", value: 274 },
  { title: "Projects", value: 421 },
  { title: "Hours of Support", value: 1364 },
  { title: "Hard Workers", value: 18 },
];

const Counter = ({ title, value }) => {
  const [localValue, setLocalValue] = useState(value || 0);

  useEffect(() => {
    const delay = value < 100 ? 10 : 2;
    for (let i = 1; i <= value; i += 1) {
      setTimeout(() => {
        setLocalValue(i);
      }, i * delay);
    }
  }, []);

  return (
    <div className="col-lg-3 col-6 text-center">
      <span data-toggle="counter-up">{localValue}</span>
      <p>{title}</p>
    </div>
  );
};

const WhyUs = () => (
  <section id="why-us" className="wow fadeIn">
    <div className="container">
      <header className="section-header">
        <h3>Why choose us?</h3>
        <p>
          Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant
          vituperatoribus.
        </p>
      </header>

      <div className="row row-eq-height justify-content-center">
        <div className="col-lg-4 mb-4">
          <div className="card wow bounceInUp">
            <i className="fa fa-diamond" />
            <div className="card-body">
              <h5 className="card-title">Corporis dolorem</h5>
              <p className="card-text">
                Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab
                inventore officiis aut voluptatibus.
              </p>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card wow bounceInUp">
            <i className="fa fa-language" />
            <div className="card-body">
              <h5 className="card-title">Voluptates dolores</h5>
              <p className="card-text">
                Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.
              </p>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card wow bounceInUp">
            <i className="fa fa-object-group" />
            <div className="card-body">
              <h5 className="card-title">Eum ut aspernatur</h5>
              <p className="card-text">
                Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.
              </p>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row counters">
        {counters.map((c) => (
          <Counter key={c.title} title={c.title} value={c.value} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
