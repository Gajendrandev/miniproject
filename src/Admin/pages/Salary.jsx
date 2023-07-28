import "./Salary.css";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Sidebar from "../components/Sidebar";




ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data = {
  labels: ["feb","march ", "april ", "May ", "june", "july "],
  datasets: [
    {
      data: [0,7,8,9,7,0],
      backgroundColor: "transparent",
      borderColor: "#302f49",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderDash: [10],
      },
    },
    y: {
      min: 2,
      max: 10,
      
      grid: {
        borderDash: [10],
      },
    },
  },
};

const pie = () => {
  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];}
const EmpPer = () => {
  const [PerformanceData, setPerformanceData] = useState([]);

  const fetchPerformanceData = () => {
    const mockData = [
      {
        id: 619,
        Role:"Full stack developer",
        
        Salary: "$10000",
        Bonus: "$100",
        Month: "july",
        Status:<img src="https://cdn-icons-png.flaticon.com/128/9108/9108245.png" alt="Lamp" width="50" height="50"></img>
      },
      {
        id: 619,
        Role:"Full stack developer",
        
        Salary: "$10000",
        Bonus: "$90",
        Month: "june",
        Status:<img src="https://cdn-icons-png.flaticon.com/128/9108/9108245.png" alt="Lamp" width="50" height="50"></img>
      },
      {
        id: 619,
        Role:"Full stack developer",
        
        Salary: "$10000",
        Bonus: "$0",
        Month: "May",
        Status:<img src="https://cdn-icons-png.flaticon.com/128/9108/9108263.png" alt="Lamp" width="50" height="50"></img>
      },
      {
        id: 619,
        Role:"Full stack developer",
        
        Salary: "$10000",
        Bonus: "$80",
        Month: "April",
        Status:<img src="https://cdn-icons-png.flaticon.com/128/9108/9108263.png" alt="Lamp" width="50" height="50"></img>
      },
      {
        id: 619,
        Role:"Full stack developer",
        
        Salary: "$10000",
        Bonus: "$110",
        Month: "March",
        Status:<img src="https://cdn-icons-png.flaticon.com/128/9108/9108245.png" alt="Lamp" width="50" height="50"></img>
      },
    ];

    setPerformanceData(mockData);
  };

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="graphs-page">
        <div className="covers">
        
          
        </div>
        <div className="covers-graph">
          <div style={{ width: "500px", height: "300px", marginLeft: "20px" }}>
            <center>BONUS GRAPH</center>
            <Line data={data} options={options}></Line>
          </div>
        </div>
        <div className="covers-2">
            <center><h2>SALARY</h2></center>
        <div className="salary-page"><br></br>
            <div className="rights-2">
            <table className="salary-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role</th>
                  <th>Salary</th>
                  <th>Bonus</th>
                  <th>Month</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {PerformanceData.map((performance) => (
                  <tr key={performance.id}>
                    <td>{performance.id}</td>
                    <td>{performance.Role}</td>
                    <td>{performance.Salary}</td>
                    <td>{performance.Bonus}</td>
                    <td>{performance.Month}</td>
                    <td>{performance.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <br></br>
            <br>
            </br>
            <br></br>
            <br></br><br></br><br></br><br></br>
            <div>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EmpPer;
