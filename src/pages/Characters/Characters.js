import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import BtnPage from "../../components/BtnPage/BtnPage";
import "./characters.css";
import Title from "../../components/Title";


const Characters = ({ title}) => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState(1);

    const clickNextPage = () => {
      setNextpage((actual) => (actual < characters.info.pages) ? actual + 1 : null);
  
    };

    const clickBackPage = () => {
      setNextpage((actual) => (actual > 0 ? actual - 1 : null));
  };
  
   useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}`)
      .then((res) => res.json())
      .then((info) => setCharacters(info));
  }, [nextPage]);

  return (
    <div>
      <Title />
      <Cards data={characters} title={title} />
      <div className="btn">
        <BtnPage value="Back" eventFN={clickBackPage} />
        <BtnPage value="Next" eventFN={clickNextPage} />
      </div>
    </div>
  );
};

export default Characters;
