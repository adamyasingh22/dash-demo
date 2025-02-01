import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface CustomerData {
  id: string
  name: string
  coordinates: [number, number] 
  color: string
  customers: number
}

interface LeafletMapProps {
  customerData: CustomerData[]
}

export default function LeafletMap({ customerData }: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([20, 0], 2)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)
    }

    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
         // mapRef.current.removeLayer(layer) 
        }
      });

     
      customerData.forEach(({ coordinates, color, name, customers }) => {
        const marker = L.marker(coordinates, {
          icon: L.divIcon({
            className: "custom-icon",
            html: `<div style="background-color: ${color}; width: 10px; height: 10px; border-radius: 50%; border: 2px solid white;"></div>`,
          }),
        });

       
        if (mapRef.current) {
          marker.addTo(mapRef.current)
            .bindPopup(`<strong>${name}</strong><br />Customers: ${customers}`);
        }
      });
    }
  }, [customerData])

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>
}