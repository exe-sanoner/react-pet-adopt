import Pet from "./Pet";

const Results = ({ pets }) => {
  // componente
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2> // Uso ternary, si no encuentra, h1, si encuentra, MAP
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
