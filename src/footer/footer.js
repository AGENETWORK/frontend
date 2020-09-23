/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

const Footer = () => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-info">
            <h3>AGE Network</h3>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna
              derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque
              felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              44 Idiroko Rd, <br />
              Ota, Ogun State
              <br />
              Nigeria
              <br />
              <strong>Zip Code:</strong> 112212
              <br />
              <strong>Phone:</strong> +234 803 315 0904
              <br />
              <strong>Email:</strong> girlsnetworknigeria@gmail.com
            </p>

            <div className="social-links">
              <a href="#" className="twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="fa fa-google-plus" />
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim
              veniam illum dolore legam minim quorum culpa amet magna export quem marada parida
              nodela caramase seza.
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>AGE Network</strong>. All Rights Reserved
      </div>
      {/* <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div> */}
    </div>
  </footer>
);

export default Footer;
