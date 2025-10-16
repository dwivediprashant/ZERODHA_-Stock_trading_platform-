import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function MarketTrends({ stockName }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  const labels = ["2020", "2021", "2022", "2023", "2024", "2025"];

  // generate cumulative fluctuating data
  const base = 30000;
  let value = base;
  const dataPoints = labels.map(() => {
    const change = faker.number.int({ min: -5000, max: 5000 }); // fluctuate ±5k
    value = Math.max(1000, value + change);
    return value;
  });
  // chart ref callback to create gradient
  const gradientBg = (ctx) => {
    const chart = ctx.chart;
    const { ctx: canvasCtx, chartArea } = chart;
    if (!chartArea) return "rgba(0,0,0,0)"; // before render

    const gradient = canvasCtx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    const isUp = dataPoints[dataPoints.length - 1] >= dataPoints[0];
    if (isUp) {
      gradient.addColorStop(0, "rgba(16,185,129,0.6)"); // bright green top
      gradient.addColorStop(1, "rgba(16,185,129,0.05)"); // transparent bottom
    } else {
      gradient.addColorStop(0, "rgba(239,68,68,0.6)"); // bright red top
      gradient.addColorStop(1, "rgba(239,68,68,0.05)"); // transparent bottom
    }
    return gradient;
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: `${stockName} 's stock price`,
        data: dataPoints,
        borderColor:
          dataPoints[dataPoints.length - 1] >= dataPoints[0] ? "green" : "red",
        backgroundColor: gradientBg,
      },
    ],
  };

  return (
    <div className="mb-5 border">
      <span className="badge text-bg-dark ">{stockName}</span>
      <Line data={data} options={options} />
    </div>
  );
}

export default MarketTrends;
