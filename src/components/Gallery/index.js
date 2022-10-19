import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";
const pages = [
  {name: "commercial", desc: "products and stuff idk"},
  {},
  {},
  {},
];

function Gallery(props) {
  const currentCategory = pages[0];
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{capitalizeFirstLetter(currentCategory.desc)}</p>
      <div className="flex-row">
        <img src={photo} alt="vegatables on a grocery shelf" className="img-thumbnail mx-1"></img>
      </div>
    </section>
  );
} 

export default Gallery;