import Card from "../Card";
import "./cards.css"


const Cards = ({ data, title}) => {

    return (
      <div className="cards">
        {Array.isArray(data) ? (
          <Card
            title={title}
            key={Math.random() * 1234}
            name={data.name}
            image={data.image}
            species={data.species}
            type={data.type}
            id={data.id}
            dimension={data.dimension}
            air_date={data.air_date}
          />
        ) : (
          data.results.map((el, i) => {
            return (
              <Card
                title={title}
                key={i + Math.random() * 12534}
                name={el.name}
                image={el.image}
                id={el.id}
                species={el.species}
                type={el.type}
                dimension={el.dimension}
                air_date={el.air_date}
              />
            );
          })
        )}
      </div>
    );
};

export default Cards;