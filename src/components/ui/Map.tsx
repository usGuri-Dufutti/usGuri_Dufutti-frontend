import { useEffect, useRef } from "react";
import L from "leaflet";

function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstanceRef.current) {
            // Initialize the map
            const map = L.map(mapRef.current).setView([-29.1671084, -51.5244032], 13);
            
            // Add tile layer
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© UsGuri Dufutti",
            }).addTo(map);

            // Create and add circle
            const circle = L.circle([-29.1671084, -51.5244032], {
                color: "red",
                fillColor: "red",
                fillOpacity: 0.3,
                radius: 1000,
                weight: 2
            }).addTo(map);

            // Add popup to circle
            circle.bindPopup("Center of Caxias do Sul").openPopup();

            mapInstanceRef.current = map;

            // Invalidate size to ensure proper rendering
            setTimeout(() => {
                map.invalidateSize();
                // Ensure circle is visible after map is fully loaded
                setTimeout(() => {
                    map.fitBounds(circle.getBounds().pad(0.1));
                }, 200);
            }, 100);
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div 
            ref={mapRef}
            id="map" 
            className="w-full h-full rounded-xl shadow-md border border-gray-300"
            style={{ minHeight: '400px' }}
        />
    );
}

export default Map;