import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
import { watchlist } from "../../data/data";
function AnalyticsWindow({ uid, setAnalyticsPop }) {
  const currStock = watchlist.filter((stock, idx) => {
    return stock.name == uid;
  });
  let lastYear = new Date();
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Rise in %",
        backgroundColor: "green",
        data: currStock[0].allMonthPercent.map((p) =>
          parseFloat(p) > 0 ? parseFloat(p) : 0
        ),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Fall in %",
        backgroundColor: "red",
        data: currStock[0].allMonthPercent.map((p) =>
          parseFloat(p) < 0 ? parseFloat(p) : 0
        ),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="pop-top analytics-top">
      <h3 className="text-dark text-center">
        <span className="text-primary">{uid}</span> Analytics of last year (
        {lastYear.toLocaleDateString("en-US").slice(6, 10) - 1})
      </h3>
      <div className="analytics-pop">
        <button
          className="btn-close close-window-btn  "
          onClick={() => setAnalyticsPop(false)}
        ></button>
        <Chart type="bar" data={data} />
      </div>
    </div>
  );
}

export default AnalyticsWindow;
