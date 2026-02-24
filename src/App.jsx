import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Account from "./pages/Account";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Settings from "./pages/Settings";

function App() {

  return (
    <BrowserRouter>

      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/location">Location</Link> |{" "}
        <Link to="/account">Account</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;