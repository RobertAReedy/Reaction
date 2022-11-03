import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  /**
   * The second argument, an array with one element (in this case; 
   * it can have more presumably), is what the useEffect is watching
   * to see if there's a change. If there is, it runs the function
   * in the first argument, and then reloads the component. 
   */
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

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
            <a href="#about"onClick={() => {
              setContactSelected(false);
            }}>About Me</a>
          </li>
          <li className={`mx-1 ${contactSelected && "navActive"}`}>
            <span onClick={() => {
              if (contactSelected) {setContactSelected(false);}
              else {
                setContactSelected(true);
              }
            }}>
              Contact
            </span>
          </li>
          {categories.map((category) => {
            return (
              //map returns must have a key property in the outermost
              //component so the virtual DOM that React makes can
              //tell them apart
              <li className={`mx-1 
                ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
                key={category.name}
              >
                <span onClick={() => {
                  // document.title = category.name;
                  setContactSelected(false);
                  setCurrentCategory(category);
                }}>
                  {capitalizeFirstLetter(category.name)}
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