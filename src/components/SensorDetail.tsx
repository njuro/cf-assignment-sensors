import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import SensorContext from "./SensorContext";
import { Sensor } from "../types";
import SensorMap from "./SensorMap";

function SensorDetail() {
  const { id } = useParams<{ id: string }>();
  const { sensors } = useContext(SensorContext);
  const [selectedSensor, setSelectedSensor] = useState<Sensor>();

  useEffect(() => {
    setSelectedSensor(sensors.find((s) => s.id.toString() === id));
  }, [id, sensors]);

  return selectedSensor ? (
    <Card>
      <CardContent>
        <Typography variant="body1">Sensor {selectedSensor.name}</Typography>
        <Typography variant="body2">
          Coordinates {selectedSensor.coordinates[0]}{" "}
          {selectedSensor.coordinates[1]}
        </Typography>
        <SensorMap center={selectedSensor.coordinates} />
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="/">
          Back
        </Button>
      </CardActions>
    </Card>
  ) : null;
}

export default SensorDetail;
