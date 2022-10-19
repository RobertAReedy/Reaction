import React, { useState } from "react";

function Nav() {
  const [categories] = useState([
    {
      name: "Commercial", description: "a commercial"
    },
    {
      name: "Portraits", description: "these are portraits"
    },
    {
      name: "Food", description: "this is food I think"
    },
    {
      name: "Landscape", description: "a scape of land"
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function categorySelected(name) {
    console.log(name);
  }

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/" data-testid="link">
          <span role="img" aria-label="camera">📸</span> Camera
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-1">
            <span>Contact</span>
          </li>
          {categories.map((category) => {
            return (
              //map returns must have a key property in the outermost
              //component so the virtual DOM that React makes can
              //tell them apart
              <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;