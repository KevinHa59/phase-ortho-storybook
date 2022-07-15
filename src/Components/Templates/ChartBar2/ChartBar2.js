import React from 'react';
import './ChartBar2.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar2({ empData }) {
  const LocationData = empData.filter((emp) => emp.Location === 'CAD-IMPORT');
  const totalCADUnit = LocationData.reduce((total, curr) => (total = total + curr.Units), 0);
  const totalCADGOAL = totalCADUnit * 0.6;
  //   console.log(totalUnit);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Label',
      },
    },
  };
  const labels = ['CAD', 'PRINT', 'THERM', 'LASER', 'MILL', 'TUMBLE', 'INSPECT', 'PACK & SHIP'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Unit',
        data: [totalCADUnit, 10, 15, 20, 25, 30, 35, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Goal',
        data: [totalCADGOAL, 15, 20, 25, 30, 35, 40, 120],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
}
