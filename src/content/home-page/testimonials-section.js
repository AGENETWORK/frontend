/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useLayoutEffect } from "react";

const $ = window.jQuery;

const Testimonials = () => {
  const baseUrl = "https://res.cloudinary.com/temi2015/image/upload";
  const testimonials = [
    {
      idx: 0,
      imgSrc: `${baseUrl}/v1599566790/AGENETWORK/testimonial-1_zintb3.jpg`,
      name: "Saul Goodman",
      title: "CEO & Founder",
      remarks: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum 
      suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. 
      Maecen aliquam, risus at semper.`,
    },
    {
      idx: 1,
      imgSrc: `${baseUrl}/v1599566793/AGENETWORK/testimonial-2_x54pzu.jpg`,
      name: "Sara Wilsson",
      title: "Designer",
      remarks: `Export tempor illum tamen malis malis eram quae irure esse labore quem cillum 
      quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat 
      irure amet legam anim culpa.`,
    },
    {
      idx: 2,
      imgSrc: `${baseUrl}/v1599566789/AGENETWORK/testimonial-3_bdhkkz.jpg`,
      name: "Jena Karlis",
      title: "Store Owner",
      remarks: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
      veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint
      minim.`,
    },
    {
      idx: 3,
      imgSrc: `${baseUrl}/v1599566788/AGENETWORK/testimonial-4_aank4v.jpg`,
      name: "Matt Brandon",
      title: "Freelancer",
      remarks: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
      fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem
      dolore labore illum veniam.`,
    },
    {
      idx: 4,
      imgSrc: `${baseUrl}/v1599566793/AGENETWORK/testimonial-5_lh2irg.jpg`,
      name: "John Larson",
      title: "Entrepreneur",
      remarks: `Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
      veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
      culpa fore nisi cillum quid.`,
    },
  ];

  useLayoutEffect(() => {
    const handler = () => {
      $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
      });
    };

    window.addEventListener("DOMContentLoaded", handler);
    return () => {
      window.removeEventListener("DOMContentLoaded", handler);
    };
  }, []);

  return (
    <section id="testimonials" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonials-carousel wow fadeInUp">
              {testimonials.map(({ imgSrc, name, title, remarks, idx }) => (
                <div className="testimonial-item" key={idx}>
                  <img alt="" className="testimonial-img" src={imgSrc} />
                  <h3>{name}</h3>
                  <h4>{title}</h4>
                  <p>{remarks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
