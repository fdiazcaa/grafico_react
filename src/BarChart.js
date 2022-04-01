import React, { useMemo } from "react";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);





const scores = [30997, 31002, 31007, 31012, 31017, 31022, 31027, 31032, 31037, 31045, 31053, 31061, 31069, 31077, 31085, 31093, 31101, 31109, 31117, 31125, 31133, 31141, 31149, 31157, 31165, 31173, 31181, 31189, 31197, 31205, 31213];
const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          tension: 0.3,
          data: scores,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}
