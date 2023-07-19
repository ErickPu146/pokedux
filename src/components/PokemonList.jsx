import PokemonCard from "./PokemonCard";
import { Col, Row } from "antd";

const PokemonList = ({ pokemons }) => {
  console.log('lista', pokemons)
  return (
    <>
      <div className="PokemonList">
        <Row gutter={[16, 16]}>
          {pokemons.map((pokemon, index) => (
            <Col className="gutter-row" key={index} xs={24} sm={12} md={8} lg={6}>
              <PokemonCard data={pokemon} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

PokemonList.defaultProps = {
  pokemons: [
    { name: "uno", abilities: "fire, magic" },
    { name: "dos", abilities: "fire, magic" },
    { name: "tres", abilities: "fire, magic" },
    { name: "444", abilities: "fire, magic" },
    { name: "454", abilities: "fire, magic" },
  ],
};

export default PokemonList;
