import React from "react";
import logo from "../assets/img/techmart_logo.png";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="mx-5 p-4">
      <h1 className="my-4">About us</h1>
      <h4>
        What is <img src={logo} className="w-25" alt="logo" /> &nbsp;?
      </h4>
      <p>
        <b> TechMart</b> is a website where you can buy IT products. The best
        deals...............
      </p>
      <p>
        So if you're looking for a Laptop, mobile phone,tab, computer or maybe
        other........
      </p>
      <p>
        Lorem ipsum dolor sit amet, consul conceptam mei ei, vis omnes dicant
        dissentiet cu. Vis et munere principes constituam, mei ei iriure
        fabulas. Tibique interesset ei eum, mea causae abhorreant an. Iudico
        scaevola contentiones his ut, animal intellegat mel an, aliquip corpora
        eam ad. Dicant quaeque eos no, at inani movet persius vim. Sit erat
        dicat forensibus id.
      </p>
      <p>
        If you'd like to get in touch with us, go to{" "}
        <Link to="/contact" onClick={scrollToTop}>
          Contact us
        </Link>{" "}
        .
      </p>
    </div>
  );
};

export default About;
