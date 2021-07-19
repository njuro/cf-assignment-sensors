import { createContext } from "react";
import { Sensor } from "../types";

interface SensorContextProps {
  sensors: Sensor[];
}
const SensorContext = createContext<SensorContextProps>({
  sensors: [],
});
export default SensorContext;
