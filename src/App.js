import { Col, Row, Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails } from "./actions";
import { getPokemons } from "./api";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "./App.css";
import pokebola from "./assets/statics/pokebola.png";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <div className="App">
        <Space direction="vertical" size="large" style={{ display: "flex" }}>
          <Row>
            <Col>
              <img
                src={pokebola}
                alt="logo"
                className={`logo ${loading ? "logo-spin" : ""} `}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col md={12}>
              <Searcher />
            </Col>
          </Row>

          {!loading ? <PokemonList pokemons={pokemons} /> : <p>Cargando</p>}
        </Space>
      </div>
    </>
  );
}

export default App;
