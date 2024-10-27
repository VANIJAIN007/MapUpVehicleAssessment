// Dashboard.js
import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import Papa from 'papaparse';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Load the CSV file from the public folder
    Papa.parse('/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        
        // Process data for chart
        const makes = [...new Set(data.map(item => item.Make))];  // Unique makes
        const counts = makes.map(make => data.filter(item => item.Make === make).length);

        setChartData({
          labels: makes,

          datasets: [
            {
              label: 'Number of Vehicles',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
          ],
        });
      },
    });
  }, []);

  return (
    <div>
      <h1>EV Registration Data</h1>
      <BarChart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
