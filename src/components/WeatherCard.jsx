function WeatherCard({ city, weather }) {

  if (!weather) return null;

  return (
    <div style={styles.card} className="weather-card">

      <h2 style={styles.city}>{city}</h2>

      <div style={styles.temp}>
        {Math.round(weather.temperature)}°C
      </div>

      <div style={styles.details}>
        <p>Wind Speed: {weather.windspeed} km/h</p>
        <p>Wind Direction: {weather.winddirection}°</p>
      </div>

    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    color: "white",
    padding: "25px",
    borderRadius: "12px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
  },

  city: {
    marginBottom: "10px"
  },

  temp: {
    fontSize: "48px",
    fontWeight: "bold"
  },

  details: {
    marginTop: "10px",
    opacity: 0.8
  }
};

export default WeatherCard;