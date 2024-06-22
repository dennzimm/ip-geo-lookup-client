import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

export interface MapProps {
  coordinates: [number, number];
}

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export const Map = ({ coordinates }: MapProps) => {
  return (
    <div className="pointer-events-none	">
      <ComposableMap projectionConfig={{ scale: 1200, center: coordinates }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        <Marker coordinates={coordinates}>
          <circle r={8} fill="#bd0eb0" />
        </Marker>
      </ComposableMap>
    </div>
  );
};
