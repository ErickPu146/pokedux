import { Col, Row, Space } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { getPokemonsWithDetails } from "./actions";
import { getPokemons } from "./api";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import pokebola from "./assets/statics/pokebola.png";
import logo from "./assets/statics/logo.png";
import "./App.css";

const getPokemonsSelector = createSelector(
  (state) => state.getIn(["data", "pokemons"], shallowEqual),
  (pokemons) => pokemons.toJS()
);

function App() {
  const pokemons = useSelector(getPokemonsSelector);
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));

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
          <Row justify="center">
            <Col>
              <img src={pokebola} alt="pokebola" className={`${loading ? 'pokebola' : 'd-none'}`} />
              <img src={logo} alt="logo" className={`${!loading ? 'logo' : 'd-none'}`} />
            </Col>
          </Row>
          <Row justify="center">
            <Col md={12}>
              <Searcher />
            </Col>
          </Row>

          {!loading ? <PokemonList pokemons={pokemons} /> : <p className="first-letter">Cargando</p>}
        </Space>
      </div>
    </>
  );
}

export default App;
