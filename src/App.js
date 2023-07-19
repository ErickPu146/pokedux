import { Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import getPokemons from "./api";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./assets/statics/logo.svg";
import "./App.css";
import { setPokemons as setPokemonsAction} from "./actions";


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons()
      setPokemons(data)
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <div className="App">
        <Space  direction="vertical" size="large" style={{ display: 'flex' }}>
          <Row justify="center">
          <Col span={18}>
              <img src={logo} alt="logo"/>
            </Col>
          </Row>
          <Row justify="center">
            <Col md={12}>
              <Searcher />
            </Col>
          </Row>

          <PokemonList pokemons={pokemons}/>
        </Space>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispachToProps = (dispach) => ({
  setPokemons: (value) => dispach(setPokemonsAction)
});

export default App;
