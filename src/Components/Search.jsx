import React, { useState } from "react";
import { connect } from "react-redux";

import { search } from "../actions";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";

import "../assets/styles/components/Search.scss";
import CarouselItem from "./CarouselItem";

const Search = (props) => {
  const hasResult = Object.keys(props.results).length > 0;
  const handleChange = (event) => {
    props.search(event.target.value);
  };
  return (
    <>
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input
          type="text"
          className="input_serch"
          placeholder="Buscar..."
          onChange={handleChange}
        />
      </section>
      {hasResult ? (
        <Categories title="Results">
          <Carousel>
            {props.results.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      ) : null}
    </>
  );
};

const mapDispatchToProps = {
  search,
};
const mapStateToProps = (state) => {
  return {
    results: state.search,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
