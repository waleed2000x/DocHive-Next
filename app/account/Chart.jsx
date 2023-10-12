"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { options, textCenter } from "./ChartData";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart({ values }) {
  const [completedValue, setCompletedValue] = useState(40);

  let totalValue = 100;
  let incompleteValue = totalValue - completedValue;

  useEffect(() => {
    values.contact !== "" &&
      values.city !== "" &&
      values.specialization !== "" &&
      setCompletedValue(100);
  }, [values]);

  const data = {
    labels: ["Completed", "Incomplete"],
    datasets: [
      {
        label: "Profile",
        data: [completedValue, incompleteValue],
        backgroundColor: ["#27e64a", "white"],
        borderColor: ["#27e64a", "white"],
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
}
