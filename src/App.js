import './App.css';
import { useState } from "react";
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import Contact from './components/Contact';

function App() {
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
      ></Nav>
      <main>
        <Contact></Contact>
        <Gallery category={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
