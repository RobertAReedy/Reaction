import './App.css';
import { useState } from "react";
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
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

  return (
    <div className="">
      <Nav //these will be sent as props into the Nav object
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          //below is a React fragment; as items inside
          //a conditional have to have an all encompassing
          //parent element
          <> 
            <Gallery category={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <>
            <Contact></Contact>
          </>
        )

        }
        
      </main>
    </div>
  );
}

export default App;
