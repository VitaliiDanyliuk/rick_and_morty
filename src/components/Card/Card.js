
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ name, image, type, species, dimension, air_date, id, title }) => {
  return (
    <div className="card">
      <Link to={`/${title}/${id}`}>
        <img src={image ? image : null} alt={image ? name : null} />
        <div className="card-name">{name ? name : null}</div>
        <div className="card-type">{type ? type : null}</div>
        <div className="card-species">{species ? species : null}</div>
        <div>{dimension ? dimension : null}</div>
        <div>{air_date ? air_date : null}</div>
      </Link>
    </div>
  );
};

export default Card;
