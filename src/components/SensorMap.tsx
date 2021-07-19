import React, { useEffect } from "react";
import { Feature, Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import { Circle, Point } from "ol/geom";
import { Fill, Stroke, Style } from "ol/style";
import VectorSource from "ol/source/Vector";

interface SensorMapProps {
  center: [number, number];
}
function SensorMap({ center }: SensorMapProps) {
  useEffect(() => {
    function loadMap() {
      const coordinates = fromLonLat(center);

      return new Map({
        layers: [
          new TileLayer({ source: new OSM() }),
          new VectorLayer({
            source: new VectorSource({
              features: [new Feature(new Point(coordinates))],
            }),
            style: new Style({
              geometry: new Circle(coordinates, 8),
              stroke: new Stroke({ color: "red", width: 3 }),
              fill: new Fill({ color: "green" }),
            }),
          }),
        ],
        view: new View({
          center: coordinates,
          zoom: 18,
        }),
        target: "map",
      });
    }

    loadMap();
  }, [center]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
}

export default SensorMap;
