import gooToBeck from "../../img/Group4.png";

import "./title.css";

const Title = () => {
  return (
    <div className="characters-title">
      <div className="characters-img">
        <img src={gooToBeck} alt="gooToBeck" />
      </div>
      <h3 className="characters-text">Pilot</h3>
    </div>
  );
};

export default Title;
