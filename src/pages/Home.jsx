import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getWeather } from "../api";
import WeatherCard from "../components/WeatherCard";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import "../index.css";

function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);
  const { user } = useAuth();

  async function loadSavedLocations() {
    const snapshot = await getDocs(
      collection(db, "users", user.uid, "locations")
    );

    const loadedLocations = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setLocations(loadedLocations);
  }

  async function loadWeatherForCity(location) {
    const data = await getWeather(location.latitude, location.longitude);
    setCity(location.city);
    setWeather(data.current_weather);
  }

  async function deleteLocation(id) {
    await deleteDoc(doc(db, "users", user.uid, "locations", id));
    loadSavedLocations();
  }

  useEffect(() => {
    loadSavedLocations();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {weather && <WeatherCard city={city} weather={weather} />}
      <div className="saved-cities">
        <h2>Saved Cities</h2>
        {locations.length === 0 && <p>No saved locations yet.</p>}
        {locations.map(location => (
          <div
            key={location.id}
            style={{
              background: "#1e293b",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>{location.city}</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => loadWeatherForCity(location)}>
                View
              </button>

              <button onClick={() => deleteLocation(location.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;