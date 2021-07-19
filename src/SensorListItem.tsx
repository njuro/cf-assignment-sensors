import React from "react";
import { Sensor } from "./types";

interface SensorListItemProps {
  sensor: Sensor;
}
function SensorListItem({ sensor }: SensorListItemProps) {
  return (
    <li>
      <strong>{sensor.name}: </strong>
      {sensor.description}
    </li>
  );
}

export default SensorListItem;
