import { Col, Row, Space } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../../slices/dataSlice";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import PaginationPokemons from "../../components/PaginationPokemons";
import logo from "../../assets/statics/logo.png";
import pokebola from "../../assets/statics/pokebola.png";

import "./home.css";
import PokemonCard from "../../components/PokemonCard";

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemon = useSelector((state) => state.data.searchedPokemon);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);
  return (
    <>
      <div className="home">
        <Space direction="vertical" size="large" style={{ display: "flex" }}>
          <Row justify="center">
            <Col>
              <img
                src={pokebola}
                alt="pokebola"
                className={`${loading ? "pokebola" : "d-none"}`}
              />
              <img
                src={logo}
                alt="logo"
                className={`${!loading ? "logo" : "d-none"}`}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col md={12}>
              <Searcher />
            </Col>
          </Row>

          {!loading ? (
            <>
              {searchedPokemon.name !== "" ? (
                <>
                  <Row gutter={[16, 16]} justify="center">
                    <Col md={24}>Mi pokemon buscado:</Col>
                    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
                      <PokemonCard pokemon={searchedPokemon} />
                    </Col>
                  </Row>
                </>
              ) : null}

              <Row justify="center">
                <PaginationPokemons pokemons={pokemons} />
              </Row>
            </>
          ) : (
            <p className="first-letter">Cargando</p>
          )}
        </Space>
      </div>
    </>
  );
};

export default Home;
