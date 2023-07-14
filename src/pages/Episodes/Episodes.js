import { useState, useEffect } from "react";
import Title from "../../components/Title";
import Cards from "../../components/Cards";
import BtnPage from "../../components/BtnPage";


const Episodes = ({ title}) => {
const [episode, setEpisode] = useState([]);
const [nextPage, setNextpage] = useState(1);

  const clickNextPage = () => {

  setNextpage((actual) => (actual < episode.info.pages ? actual + 1 : null));
    ;
};

const clickBackPage = () => {
  setNextpage((actual) => (actual > 0 ? actual - 1 : null));
};
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${nextPage}`)
      .then((res) => res.json())
      .then((info) => setEpisode(info));
  }, [nextPage]);

  return (
    <div>
      <Title />
      <Cards data={episode} title={title} />
      <div className="btn">
        <BtnPage value="Back" eventFN={clickBackPage} />
        <BtnPage value="Next" eventFN={clickNextPage} />
      </div>
    </div>
  );
};

export default Episodes;
