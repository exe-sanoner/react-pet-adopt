import { Link } from "react-router-dom";

const Pet = (props) => {
  // componente
  const { name, animal, breed, images, location, id } = props;

  let hero = "//pets-images.dev-apis.com/pets/none.jpg"; // DEFENSIVO
  if (images.length) {
    // De lo contrario, si tengo una imagen de la API, tomo la primera
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
