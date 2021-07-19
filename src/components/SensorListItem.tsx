import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Sensor } from "../types";

const SensorItem = styled(Grid)`
  min-width: 40%;
  margin: 20px;
`;
interface SensorListItemProps {
  sensor: Sensor;
}
function SensorListItem({ sensor }: SensorListItemProps) {
  return (
    <SensorItem item>
      <Card>
        <CardContent>
          <Typography variant="h5">{sensor.name}</Typography>
          <Typography variant="body1" style={{ marginTop: 5 }}>
            <em>{sensor.description}</em>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to={`/${sensor.id}`}>
            See details
          </Button>
        </CardActions>
      </Card>
    </SensorItem>
  );
}

export default SensorListItem;
