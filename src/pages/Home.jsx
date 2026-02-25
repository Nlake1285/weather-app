import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getWeather } from "../api";
import WeatherCard from "../components/WeatherCard";
import { db } from "../firebase";

function Home() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    loadSavedLocation();
  }, []);

  async function loadSavedLocation() {

    const snapshot = await getDocs(collection(db, "locations"));

    if (snapshot.empty) return;

    const saved = snapshot.docs[0].data();

    setCity(saved.city);

    const data = await getWeather(
      saved.latitude,
      saved.longitude
    );

    setWeather(data.current_weather);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>Weather App</h1>

      {weather ? (
        <WeatherCard
          city={city}
          weather={weather}
        />
      ) : (
        <p>No saved location yet.</p>
      )}

    </div>
  );
}

export default Home;