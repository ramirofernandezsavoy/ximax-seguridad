import * as React from "react";
import { Link } from "react-scroll";

const Toplogo = (props) => (
  <>
    <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}>
      <svg
        fill="white"
        height="48px"
        width="48px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51.983 51.983"
        className="fixed bottom-6 right-8 bg-blue-950 rounded-full p-1 hover:bg-blue-300 hover:fill-blue-950 z-10"
      >
        <path d="M45.257,22.339l-18.5-22c-0.381-0.452-1.15-0.452-1.531,0l-18.5,22c-0.25,0.297-0.305,0.713-0.141,1.066 c0.164,0.352,0.518,0.578,0.906,0.578h8.486l4.199,25.196c0.262,1.572,1.716,2.804,3.312,2.804h5.005 c1.595,0,3.05-1.231,3.313-2.804l4.198-25.196h8.487c0.389,0,0.742-0.226,0.906-0.578C45.562,23.052,45.507,22.636,45.257,22.339z M35.157,21.983c-0.489,0-0.906,0.354-0.986,0.835l-4.338,26.031c-0.101,0.604-0.727,1.133-1.34,1.133h-5.005 c-0.613,0-1.238-0.529-1.339-1.133l-4.339-26.032c-0.08-0.482-0.497-0.835-0.986-0.835H9.639L25.991,2.536l16.353,19.446H35.157z"></path>{" "}
      </svg>
    </Link>
  </>
);
export default Toplogo;
