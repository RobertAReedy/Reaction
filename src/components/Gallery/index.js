import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "./PhotoList";

function Gallery(props) {
  const currentCategory = props.category;
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{capitalizeFirstLetter(currentCategory.description)}</p>
      <PhotoList category={currentCategory.name}></PhotoList>
    </section>
  );
} 

export default Gallery;