import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const EVDataDashboard = () => {
  const [data, setData] = useState([]);

  // Load the CSV when the component mounts
  useEffect(() => {
    Papa.parse('/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,  
      complete: (result) => {
        console.log('Parsed Data:', result.data);
        setData(result.data);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }, []);

  return (
    <div>
      <h1>Electric Vehicle Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>1.{item.Make}</h2> 
            <h2>2.{item.Model} </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EVDataDashboard;
