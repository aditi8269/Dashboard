import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 1090, 600, 400],
    ["2019", 1320, 720, 450],
    ["2020", 1100, 880, 400],
    ["2021", 1400, 960, 500],
    ["2022", 1200, 1050, 450],
    ["2023", 1500, 1100, 550],
    ["2024", 1250, 1150, 600]
  
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2024",
  },
  colors:["#3db188","#255d6c", "#2a4858"],
};

export default function Barcharts() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
