import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {

  return (
    <div>

      <nav style={styles.nav}>

        <h2>Weather App</h2>

        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/location" style={styles.link}>Change Location</Link>
        </div>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/location"
          element={<Location />}
        />

      </Routes>

    </div>
  );
}

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    background: "#0f172a",
    color: "white"
  },

  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold"
  }

};

export default App;