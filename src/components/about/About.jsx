import "./about.css";

import me from "../../img/tiba.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
       
        <p className="a-desc">
          Fullstack developer dealing with website,web app devepoler, E-mail template && No SQL Database.
          <h4>SKILLS & EXPERTISE</h4>
          <ul>
            <li>responsive website development</li>
            <li>update existing website</li>
            <li>E-commerce</li>
            <li>web App development</li>
            <li>E-mail templates</li>
            <li>mobile application development</li>
          </ul>
        </p>
        <div className="a-award">
         
         
        </div>
      </div>
    </div>
  );
};

export default About;
