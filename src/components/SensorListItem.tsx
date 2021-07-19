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
import { Sensor } from "../types";

interface SensorListItemProps {
  sensor: Sensor;
}
function SensorListItem({ sensor }: SensorListItemProps) {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h3">{sensor.name}</Typography>
          <Typography variant="body1">{sensor.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to={`/${sensor.id}`}>
            See details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default SensorListItem;
