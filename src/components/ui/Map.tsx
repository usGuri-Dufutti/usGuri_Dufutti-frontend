import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";

import PopupComponent from "./Popup"; // your React Popup component
import { getAreas, getAreaById, type AreaSummary } from "@/services/api";

interface MapProps {
  onViewMoreDetails?: (description: string, coordinates: { latitude: number; longitude: number }, areaId: number) => void
}

function Map({ onViewMoreDetails }: MapProps) {
  const [areas, setAreas] = useState<AreaSummary[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getAreas()
      .then((data) => {
        if (mounted) setAreas(data || [])
      })
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  const colors = useMemo(() => ["red", "green", "blue"], [])
  const mapCenter: [number, number] = useMemo(() => [36.7783, -119.4179], [])

  return (
    <MapContainer
      center={mapCenter}
      zoom={6}
      className="w-full h-full min-h-[400px] rounded-xl shadow-md border border-green-300"
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© UsGuri Dufutti"
      />

      {areas.map((area, index) => {
        const first = area.coordinates?.[0]
        if (!first) return null
        const color = colors[index % colors.length]
        const lat = first.latitude
        const lng = first.longitude
        // Try multiple possible field names for the description
        const description = area.description || area.name || area.area_name || `Area ${area.id}`
        return (
          <Circle
            key={area.id}
            center={[lat, lng]}
            radius={1000}
            pathOptions={{ color, fillColor: color, fillOpacity: 0.3, weight: 2 }}
            eventHandlers={{
              click: async () => {
                try {
                  await getAreaById(area.id)
                } catch {
                  // ignore errors during prefetch
                }
              },
            }}
          >
            <Popup maxWidth={400} autoPan={true} closeButton={false}>
              <PopupComponent 
                latitude={lat}
                longitude={lng}
                description={description}
                areaId={area.id}
                onViewMoreDetails={onViewMoreDetails}
              />
            </Popup>
          </Circle>
        )
      })}

      {loading && null}
    </MapContainer>
  );
}

export default Map;
