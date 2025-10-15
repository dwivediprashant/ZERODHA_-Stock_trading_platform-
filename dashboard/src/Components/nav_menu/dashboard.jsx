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
import { watchlist } from "../../data/data";
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
  const labels = watchlist.map((stock, idx) => {
    return stock.name;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Price in rupees (₹)",
        data: watchlist.map((stock, idx) => {
          return stock.price;
        }),
        backgroundColor: watchlist.map((stock) =>
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
      {/* <div className="  p-2 bg-primary text-white">
        <p>
          <i className="fa-solid fa-clock"></i> Equity
        </p>
        <div className="row p-3 ">
          <div className="col border-end border-white fs-4 ">
            <p className="fs-2">{3.74}k</p>
            <p className="fs-6">Margin available</p>
          </div>
          <div className="col">
            <p>Months used 0</p>
            <p>Opening balance 3.74k</p>
          </div>
        </div>
      </div>
      <div className=" mb-5 mt-2 p-2 bg-primary text-white">
        <p>
          <i className="fa-solid fa-calendar"></i> Holdings(13)
        </p>
        <div className="row p-3 ">
          <div className="col border-end border-white fs-4">
            <p>
              <span className="fs-2">{1.55}k</span>{" "}
              <span className="fs-6">+5.33%</span>
            </p>
            <p className="fs-6">P&L</p>
          </div>
          <div className="col">
            <p>Current value 0</p>
            <p>Investment 3.74k</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default dashboard;
