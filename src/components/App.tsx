import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { Sensor } from "../types";
import RouterSwitch from "./RouterSwitch";
import SensorContext from "./SensorContext";

function App() {
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const [sensorsLoaded, setSensorsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch("sensors.json")
      .then((res) => res.json() as Promise<Sensor[]>)
      .then((data) => setSensors(data))
      .finally(() => setSensorsLoaded(true));
  }, [sensors]);

  return (
    <>
      <header>
        <h1>Sensors</h1>
      </header>
      <main>
        <Router>
          <SensorContext.Provider value={{ sensors }}>
            {sensorsLoaded && <RouterSwitch />}
            {!sensorsLoaded && <CircularProgress />}
          </SensorContext.Provider>
        </Router>
      </main>
    </>
  );
}

export default App;
