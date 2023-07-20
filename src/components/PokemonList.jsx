import PokemonCard from "./PokemonCard";
import { Col, Row } from "antd";

const PokemonList = ({ pokemons }) => {
  console.log("🚀 ~ file: PokemonList.jsx:5 ~ PokemonList ~ pokemons:", pokemons)
  return (
    <>
      <div className="PokemonList">
        <Row gutter={[16, 16]}>
          {pokemons.map((pokemon, index) => (
            <Col className="gutter-row" key={index} xs={24} sm={12} md={8} lg={6}>
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </div>
      </>
  );
};

export default PokemonList;
