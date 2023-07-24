import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Carousel, Col, Row } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import pokebola from "../../assets/statics/pokebola.png";
import "./profile.css";
import { searchPokemon } from "../../slices/dataSlice";

// ..
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loading);
  const pokemon = useSelector((state) => state.data.searchedPokemon)
  console.log("🚀 ~ file: index.jsx:35 ~ Profile ~ pokemon:", pokemon)
  const { pokemonId } = useParams();

  useEffect(() => {
    dispatch(searchPokemon(`${pokemonId}`));
  }, [pokemonId]);

  return (
    <>
      <div className="profile">
        <Row justify="center">
          <img
            src={pokebola}
            alt="pokebola"
            className={`${loading ? "pokebola" : "d-none"}`}
          />
        </Row>

        {
          !loading ? <p>Hola soy {pokemon.name}</p> : null
        }
        {/* 

        {!loading ? (
          <div
            className="my-5 text-center"
            data-aos="flip-up"
            data-aos-offset="0"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Row>
              <Col
                md={6}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="15"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <h1 className="pokemon-name pokemon-info">{pokemon.name}</h1>

                <Card border="warning" className="position-relative opacity-50">
                  <Card.Body>
                    <Card.Title className="pokemon-info abilities mb-3">
                      Habilidades
                    </Card.Title>
                    {pokemon.abilities?.map((element, index) => (
                      <p key={index} className="content">
                        {index + 1}. {element.ability.name}
                      </p>
                    ))}
                    <Card.Title className="pokemon-info abilities mb-3">
                      Experiencia base
                    </Card.Title>
                    <p className="content">{pokemon.base_experience}</p>
                    <Card.Title className="pokemon-info abilities mb-3">
                      Peso
                    </Card.Title>
                    <p className="content">{pokemon.weight}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center position-relative"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="15"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Carousel className="w-100">
                  <Carousel.Item>
                    <img
                      className="w-100 img-responsive"
                      src={pokemon.sprites?.other.dream_world.front_default}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-100 img-responsive"
                      src={pokemon.sprites?.other.home.front_default}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-100 img-responsive"
                      src={pokemon.sprites?.other.home.front_shiny}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </div>
        ) : null} */}
      </div>
    </>
  );
};

export { Profile };
