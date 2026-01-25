import { DataWithDate } from "@/src/types/data";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

interface DataChartProps {
  className?: string;
  dataIn7Days: DataWithDate[];
}

const getResponsiveLabelName = (array: DataWithDate[]) => {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  return array.map((item: DataWithDate) => {
    const newDate = new Date(item.date);
    const formatted: string = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const week: string = newDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    // Return different formats based on window width
    if (windowWidth < 768) {
      // Mobile view - short format
      return `${newDate.getDate()} (${week})`;
    } else {
      // Desktop view - full format
      return `${formatted} (${week})`;
    }
  });
};

export default function DataChart({ className, dataIn7Days }: DataChartProps) {
  const labels: string[] = getResponsiveLabelName(dataIn7Days);
  const dataValues: number[] = dataIn7Days.map((item) => {
    return item.correctQuiz;
  });

  // ... other options

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Recent Data",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],

        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          // Change legend label color to red
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
    //   maintainAspectRatio: false,

    elements: {
      line: { borderWidth: 2 },
    },
  };

  return (
    <div className={`p-4 ${className}`}>
      <Bar data={data} options={options} />
    </div>
  );
}
