import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import PopupComponent from "./Popup"; // your React Popup component

function Map() {
  return (
    <MapContainer
      center={[-29.1671084, -51.5244032]}
      zoom={13}
      className="w-full h-full min-h-[400px] rounded-xl shadow-md border border-green-300"
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© UsGuri Dufutti"
      />

      {/* Circle with React Popup */}
      <Circle
        center={[-29.1671084, -51.5244032]}
        radius={1000}
        pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.3, weight: 2 }}
      >
        <Popup maxWidth={400} autoPan={true} closeButton={false}>
          <PopupComponent 
          latitude={-29.1671084}
          longitude={-51.5244032}
          description="Center of Bento Gonçalves"
          />
        </Popup>
      </Circle>
    </MapContainer>
  );
}

export default Map;
