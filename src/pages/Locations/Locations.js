import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import Title from "../../components/Title";
import BtnPage from "../../components/BtnPage";

import "./locations.css"

const Locations = ({title }) => {
  const [location, setLocation] = useState([]);
  const [nextPage, setNextpage] = useState(1);

  const clickNextPage = () => { 
  setNextpage((actual) => actual < location.info.pages ? actual + 1 : null);
  }

 const clickBackPage = () => {
    setNextpage((actual) => actual>0 ? actual - 1 : null);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${nextPage}`)
      .then((res) => res.json())
      .then((info) => setLocation(info));
  }, [nextPage]);


  return (
    <div>
      <Title />
      <Cards data={location} title={title} />
      <div className="btn">
        <BtnPage value="Back" eventFN={clickBackPage} />
        <BtnPage value="Next" eventFN={clickNextPage} />
      </div>
    </div>
  );
};

export default Locations;
