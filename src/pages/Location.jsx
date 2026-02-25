import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { getCoordinates } from "../api";
import { db } from "../firebase";

function Location() {

  const [city, setCity] = useState("");

  async function saveLocation() {

    const coords = await getCoordinates(city);

    if (!coords) {
      alert("City not found");
      return;
    }

    // delete old saved locations
    const snapshot = await getDocs(collection(db, "locations"));

    for (const doc of snapshot.docs) {
      await deleteDoc(doc.ref);
    }

    // save new one
    await addDoc(collection(db, "locations"), {
      city: coords.name,
      latitude: coords.latitude,
      longitude: coords.longitude
    });

    alert("Location saved!");
  }

  return (
    <div className="container">

      <h2>Choose Location</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button onClick={saveLocation}>
        Save Location
      </button>

    </div>
  );

}

export default Location;