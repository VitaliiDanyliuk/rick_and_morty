
import mainImg from "../../img/rickandmorty21.png"
import leadingIcon from "../../img/LeadingIcon.png";

import "./home.css"

const Home = () => {
    return (
      <div className="home">
        <div className="home-content">
          <div className="home-content-img">
            <img src={mainImg} alt="Rick and Morty" />
          </div>
          <form className="home-content-form">
            <img src={leadingIcon} alt="LeadingIcon" />
            <input type="text" placeholder="Filter by name or episode (ex. S01 or S01E02)"/>
          </form>
        </div>
        <button type="button" className="home-btn">
          LOAD MORE
        </button>
      </div>
    );
}
 
export default Home;