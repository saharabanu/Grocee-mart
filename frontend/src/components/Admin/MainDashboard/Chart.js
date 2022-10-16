import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total Monthly Sales',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales 1',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [700,800,850,680,900,520,880],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Sales 2',
      data: [300,200,710,680,700,290,440],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = () => {

  return (
    <Bar options={options} data={data} />
  )
}

export default Chart