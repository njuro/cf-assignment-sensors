import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import SensorContext from "./SensorContext";
import { Sensor } from "../types";

function SensorDetail() {
  const { id } = useParams<{ id: string }>();
  const { sensors } = useContext(SensorContext);
  const [selectedSensor, setSelectedSensor] = useState<Sensor>();

  useEffect(() => {
    setSelectedSensor(sensors.find((s) => s.id.toString() === id));
  }, [id, sensors]);

  return selectedSensor ? (
    <Card>
      <CardContent>Sensor {selectedSensor.name}</CardContent>
      <CardActions>
        <Button size="small" component={Link} to="/">
          Back
        </Button>
      </CardActions>
    </Card>
  ) : null;
}

export default SensorDetail;
