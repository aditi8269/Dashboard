
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
  colors:["#fafa6e","rgb(38, 162, 138)", "rgb(62, 178, 136)" , "rgb(89, 194, 132)","rgb(120, 208, 126)"],
};

export  default function PieCharts() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}
