import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);




const scores = [30997, 31002, 31007, 31012, 31017, 31022, 31027, 31032, 31037, 31045, 31053, 31061, 31069, 31077, 31085, 31093, 31101, 31109, 31117, 31125, 31133, 31141, 31149, 31157, 31165, 31173, 31181, 31189, 31197, 31205, 31213];

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const options = {
  labelString: 'VALOR EN PESOS',
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 30950,
      
    },
    labelString: 'DIAS',
    x: [{
      scaleLabel: {
        display: true,
        
      }
    }],
  },
  plugins: {
    legend: {
      display: true,
        labelString: 'Valor en pesos',
    },
  },
};

export default function LineChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "INDICADOR FINANCIERO - Valor en pesos",
          data: scores,
          tension: 0.35,
          borderColor: "rgb(255, 5, 132)",
          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(20, 20, 20, 0.05)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(0,40,0)",
          hoverBorderColor: "rgba(0,5,200,1)",
          
        },

      ],
      labels,

    };
  }, []);

        
  
<div><p>dias</p></div>
  return <Line data={data} options={options} />;
}