"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import dynamic from "next/dynamic";

// Dynamically import the LeafletMap component without server-side rendering
const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false });

// Define the structure of customer data
interface CustomerData {
  id: string;
  name: string;
  coordinates: [number, number]; // Latitude and Longitude
  color: string;
  customers: number;
}

// Simulate fetching customer distribution data
async function fetchCustomerDistribution(): Promise<CustomerData[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  return [
    { id: "1", name: "North America", coordinates: [40, -100], color: "blue", customers: 1000 },
    { id: "2", name: "Europe", coordinates: [50, 10], color: "green", customers: 800 },
    { id: "3", name: "Asia", coordinates: [30, 110], color: "red", customers: 1200 },
    { id: "4", name: "Africa", coordinates: [0, 20], color: "yellow", customers: 500 },
    { id: "5", name: "South America", coordinates: [-20, -60], color: "purple", customers: 700 },
    { id: "6", name: "Australia", coordinates: [-25, 135], color: "orange", customers: 300 },
  ];
}

export function CustomersMap() {
  const [customerData, setCustomerData] = useState<CustomerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCustomerData() {
      try {
        const data = await fetchCustomerDistribution();
        setCustomerData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to load customer data");
        }
      }
      setIsLoading(false);
    }

    loadCustomerData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-[400px]">
          <p>Loading customer data...</p>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-[400px]">
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  // Render the map and customer data
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Distribution</CardTitle>
        <CardDescription>Global presence of our customer base</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full relative">
          <LeafletMap customerData={customerData} />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {customerData.map(({ id, name, color, customers }) => (
            <div key={id} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }} aria-hidden="true" />
              <span className="text-sm">
                {name}: {customers} customers
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
