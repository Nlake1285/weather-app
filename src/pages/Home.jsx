import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getWeather } from "../api";
import WeatherCard from "../components/WeatherCard";
import { db } from "../firebase";

function Home() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);

  async function loadSavedLocations() {
    const userId = "demoUser";

    const snapshot = await getDocs(
      collection(db, "users", userId, "locations")
    );

    const loadedLocations = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setLocations(loadedLocations);
  }

  async function loadWeatherForCity(location) {
    const data = await getWeather(
      location.latitude,
      location.longitude
    );

    setCity(location.city);
    setWeather(data.current_weather);
  }

  async function deleteLocation(id) {
    const userId = "demoUser";

    await deleteDoc(
      doc(db, "users", userId, "locations", id)
    );

    loadSavedLocations();
  }

  useEffect(() => {
    loadSavedLocations();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Weather App</h1>

      {weather && (
        <WeatherCard
          city={city}
          weather={weather}
        />
      )}

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Saved Cities</h2>

        {locations.length === 0 && (
          <p>No saved locations yet.</p>
        )}

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