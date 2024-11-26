import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
if (typeof mapboxToken === "undefined") {
  throw new Error("Erro definição de API Token MapBox");
} else {
  mapboxgl.accessToken = mapboxToken;
}

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

function MapContainer() {
  return map;
}

export default MapContainer;
