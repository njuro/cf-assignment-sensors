import React, { useEffect, useState } from "react";
import { Sensor } from "./types";
import SensorList from "./SensorList";

function App() {
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    fetch("sensors.json")
      .then((res) => res.json() as Promise<Sensor[]>)
      .then((data) => setSensors(data));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Sensors</h1>
      </header>
      <SensorList sensors={sensors} />
    </div>
  );
}

export default App;
