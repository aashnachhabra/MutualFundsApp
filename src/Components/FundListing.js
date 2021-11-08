import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

function FundListing(props) {
  const url = props.history?.location?.state?.data;

  const [data, setData] = useState([]);
  const chartData = [];

  const getData = async () => {
    const response = await fetch(url);
    const datas = await response.json();
    setData(datas);
  };

  useEffect(() => {
    getData();
  });

  if (data?.data?.length > 0) {
    for (let i = 209; i >= 0; i--) {
      chartData.push(data?.data[i]);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        <Paper
          elevation={3}
          style={{ padding: "20px", backgroundColor: "#E4F0FC" }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "monospace, sans-serif",
            }}
            gutterBottom
          >
            {data?.meta?.fund_house}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: "monospace, sans-serif" }}
            gutterBottom
          >
            <b>Scheme Type:</b> {data?.meta?.scheme_type}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: "monospace, sans-serif" }}
            gutterBottom
          >
            <b>Scheme Category :</b> {data?.meta?.scheme_category}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: "monospace, sans-serif" }}
            gutterBottom
          >
            <b>Scheme Name :</b> {data?.meta?.scheme_name}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontFamily: "monospace, sans-serif" }}
          >
            <b> Latest Nav :</b> ₹ {data?.data?.length > 0 && data.data[0]?.nav}
          </Typography>
        </Paper>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area dataKey="nav" stroke="#2451B7" fill="url(#color)" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="nav"
              tickCount={8}
              axisLine={false}
              tickLine={false}
              tickFormatter={(number) => `₹ ${number}`}
            />
            <Tooltip />
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.6}
              vertical={true}
            />
          </AreaChart>
        </ResponsiveContainer>
        <Typography
          variant="h6"
          align="center"
          style={{ fontFamily: "monospace, sans-serif" }}
        >
          2021 Analysis
        </Typography>
      </div>
    </>
  );
}
export default FundListing;
