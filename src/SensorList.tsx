import React from "react";
import { Sensor } from "./types";
import SensorListItem from "./SensorListItem";

interface SensorListProps {
  sensors: Sensor[];
}
function SensorList({ sensors }: SensorListProps) {
  return (
    <ol>
      {sensors.map((sensor) => (
        <SensorListItem sensor={sensor} key={sensor.id} />
      ))}
    </ol>
  );
}

export default SensorList;
