/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="clearfix">
    <div className="container">
      <header className="section-header">
        <h3 className="section-title">Our Portfolio</h3>
      </header>

      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app1_r4jpry.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">App 1</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app1_r4jpry.jpg"
                  data-lightbox="portfolio"
                  data-title="App 1"
                  className="link-preview"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/web3_nscfpf.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Web 3</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/web3_nscfpf.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 3"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app2_mtkdko.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">App 2</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app2_mtkdko.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 2"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/card2_wvmsk5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Card 2</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/card2_wvmsk5.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 2"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567788/AGENETWORK/portfolio/web2_iupgxa.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Web 2</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567788/AGENETWORK/portfolio/web2_iupgxa.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 2"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app3_pxxq9l.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">App 3</a>
              </h4>
              <p>App</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567785/AGENETWORK/portfolio/app3_pxxq9l.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 3"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567786/AGENETWORK/portfolio/card1_yo7nk3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Card 1</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567786/AGENETWORK/portfolio/card1_yo7nk3.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 1"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567787/AGENETWORK/portfolio/card3_kuyndc.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Card 3</a>
              </h4>
              <p>Card</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567787/AGENETWORK/portfolio/card3_kuyndc.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 3"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
          <div className="portfolio-wrap">
            <img
              src="https://res.cloudinary.com/temi2015/image/upload/v1599567788/AGENETWORK/portfolio/web1_tc6nf0.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>
                <a href="#">Web 1</a>
              </h4>
              <p>Web</p>
              <div>
                <a
                  href="https://res.cloudinary.com/temi2015/image/upload/v1599567788/AGENETWORK/portfolio/web1_tc6nf0.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 1"
                  title="Preview"
                >
                  <i className="ion ion-eye" />
                </a>
                <a href="#" className="link-details" title="More Details">
                  <i className="ion ion-android-open" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
