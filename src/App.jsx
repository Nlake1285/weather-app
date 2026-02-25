import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {

  return (
    <div className="nav-links" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

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
    color: "white",
    width: "100%",
    boxSizing: "border-box"
  },

  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold"
  }

};

export default App;