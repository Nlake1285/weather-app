import { useState } from "react";
import { getWeather } from "../api";

function Home() {

  const [weather, setWeather] = useState(null);

  async function loadWeather() {
    const data = await getWeather(46.8721, -113.9940);
    setWeather(data.current_weather);
  }

  return (
    <div>
      <h2>Home</h2>

      <button onClick={loadWeather}>
        Load Weather
      </button>

      {weather && (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}

    </div>
  );
}

export default Home;