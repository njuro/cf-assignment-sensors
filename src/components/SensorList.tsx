import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import SensorListItem from "./SensorListItem";
import SensorContext from "./SensorContext";

function SensorList() {
  const { sensors } = useContext(SensorContext);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {sensors.map((sensor) => (
        <SensorListItem sensor={sensor} key={sensor.id} />
      ))}
    </Grid>
  );
}

export default SensorList;
