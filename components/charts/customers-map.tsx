"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";


interface SetViewOnLoadProps {
  center: [number, number]; // Tuple for latitude and longitude
  zoom: number; // Zoom level
}

function SetViewOnLoad({ center, zoom }: SetViewOnLoadProps) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
}

export function CustomersMap() {
  const [geoData, setGeoData] = useState<any>(null); 

  useEffect(() => {
    const fetchGeoData = async () => {
      const response = await fetch(geoUrl);
      const data = await response.json();
      console.log(data); // Log the fetched data to inspect it

      // Check if the data is valid GeoJSON
      if (data.type === "FeatureCollection" && Array.isArray(data.features)) {
        setGeoData(data);
      } else {
        console.error("Invalid GeoJSON data", data);
      }
    };

    fetchGeoData();
  }, []);

  const geoJsonStyle = {
    fillColor: '#DDD',
    color: '#FFF',
    weight: 1,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Distribution</CardTitle>
        <CardDescription>Global customer presence</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px] w-full">
          {geoData && (
            <MapContainer
              style={{ height: '100%', width: '100%' }}
            >
              <SetViewOnLoad center={[20, 0]} zoom={2} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON data={geoData} pathOptions={geoJsonStyle} />
            </MapContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
}