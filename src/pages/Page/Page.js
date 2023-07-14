import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { req } from "../../methods/methods";

import "./page.css";

const Page = ({ url }) => {
  const [information, setInformation] = useState({
    name: null,
    image: null,
    type: null,
    dimension: null,
    created: null,
    air_date: null,
    details: {
      status: null,
      species: null,
      created: null,
      gender: null,
    },
    location: {
      nume: null,
      url: null,
    },
    origin: {
      nume: null,
      url: null,
    },
  });
  const { id } = useParams();

  useEffect(() => {
    req(`${url}${id}`)
      .then((e) => {
        setInformation({
          name: e.name,
          image: e.image,
          type: e.type,
          dimension: e.dimension,
          air_date: e.air_date,
          created: e.created,
          details: {
            status: e.status,
            species: e.species,
            gender: e.gender
          },
          location: {
              name: e.name,
              url: e.url,
            },
          origin: {
              name: e.name,
              url: e.url,
            },
          },
        );
      })
      .catch((error) => {console.log(error);});
  }, [id, url]);

  return (
    <div className="page">
      <div className="page-content">
      <div className="page-content-name">{information.name ? information.name : null}</div>
      <div className="page-content-img">
        <img src={information.image ? information.image : null} alt={information.name}/>
      </div> 
      </div>
  <div className="page-details">
      <div className="page-details-text">{information.type ? `Type: ${information.type}` : null}</div>
      <div className="page-details-text">{information.dimension ? `Dimension: ${information.dimension}` : null}</div>
      <div className="page-details-text">{information.air_date ? `Air_date: ${information.air_date}` : null}</div>
      <div className="page-details-text">{information.created ? `Created: ${information.created}` : null}</div>
      <div className="page-details-text">{information.details.status? `Status: ${information.details.status}` : null}</div>
      <div className="page-details-text">{information.details.species? `Species: ${information.details.species}` : null}</div>
      <div className="page-details-text">{information.details.gender ? `Gender: ${information.details.gender}` : null}</div>
        <div className="page-details-text">{information.location.name ? `Location-Name: ${information.location.name}` : null}</div>
        
        <NavLink to={`${information.location.url}`}>
<div className="page-details-text">{information.location.url? `Location-url: ${information.location.url}` : null}</div>
        </NavLink>
      
        <div className="page-details-text">{information.origin.name ? `Origin-Name: ${information.origin.name}` : null}</div>
        
        <NavLink to={`${information.origin.url}`}>
          <div className="page-details-text">{information.origin.url ? `Original-url: ${information.origin.url}` : null}</div> 
      </NavLink>    
</div>
     
    </div>
  );
};

export default Page;

