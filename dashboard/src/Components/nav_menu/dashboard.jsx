import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { availableStocks } from "../../data/data";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function dashboard() {
  const today = new Date();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",

        labels: {
          font: { size: 16 },
          color: "black",
        },
      },
      title: {
        display: true,
        text: `Price of Stocks — ${today.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}`,
        color: "black",
        font: { size: 16 },
      },
    },
  };
  const labels = availableStocks.map((stock, idx) => {
    return stock.name;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Price in rupees (₹)",
        data: availableStocks.map((stock, idx) => {
          return stock.price;
        }),
        backgroundColor: availableStocks.map((stock) =>
          stock.isDown ? "red" : "green"
        ),
      },
    ],
  };

  return (
    <div>
      <p className="fs-2 p-4 border-bottom border-secondary ">Hi user!</p>
      <div className="mt-2 mb-5">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default dashboard;
