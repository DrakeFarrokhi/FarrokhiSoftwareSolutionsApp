import './App.css';
import Navbar from "./Navbar.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import Reviews from "./Reviews.js";
import { Route, Routes } from "react-router-dom";

// To do:

// Contacts page & Reviews Page 

// Cards: just general look need ideas

function App() {
  const styles = {
    App: {
      width: "100%",
      height: "100%",
      display: "flex",
      margin: "0",
      padding: "0",
    },
    
  }

  return (
    <div style={styles.App}>
      <header>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
