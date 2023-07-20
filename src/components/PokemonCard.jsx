import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/styles/PokemonCard.css";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";


const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch()
  const firstLetter = pokemon.name.charAt();
  const restOfName = pokemon.name.slice(1);

  const types = pokemon.types.map(item => item.type.name).join(", ");

  const handleOnFavorite = () => {
    console.log(pokemon.id)
    dispatch(setFavorite(pokemon.id))
  }
  return (
    <>
      <Card
        title={
          <>
            <span className="pokemon-name first-letter">{firstLetter}</span>
            <span className="pokemon-name">{restOfName}</span>
          </>
        }
        cover={<img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />}
        extra={<StarButton isFavorite={pokemon.favorite} onClick={handleOnFavorite}/>}
        bordered={false}
        className="w-100 h-100"
      >
        <Meta description={types} />
      </Card>
    </>
  );
};

export default PokemonCard;
