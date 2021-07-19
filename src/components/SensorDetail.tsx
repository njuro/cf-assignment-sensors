import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import SensorContext from "./SensorContext";
import { Sensor } from "../types";
import SensorMap from "./SensorMap";

const SensorDetailBox = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  min-width: 60%;
  max-width: 80%;
`;
function SensorDetail() {
  const { id } = useParams<{ id: string }>();
  const { sensors } = useContext(SensorContext);
  const [selectedSensor, setSelectedSensor] = useState<Sensor>();

  useEffect(() => {
    setSelectedSensor(sensors.find((s) => s.id.toString() === id));
  }, [id, sensors]);

  return selectedSensor ? (
    <SensorDetailBox>
      <CardContent>
        <Typography variant="h5">{selectedSensor.name}</Typography>
        <Typography variant="body1" style={{ marginTop: 5 }}>
          <em>{`(${selectedSensor.coordinates[0]}, ${selectedSensor.coordinates[1]})`}</em>
        </Typography>
        <SensorMap center={selectedSensor.coordinates} />
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="/">
          Back
        </Button>
      </CardActions>
    </SensorDetailBox>
  ) : null;
}

export default SensorDetail;
