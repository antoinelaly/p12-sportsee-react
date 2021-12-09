import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { useAxios } from "use-axios-client";
import './radialchart.css'

const circleSize = 250;

function RadialChart() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data?.data;
  const dddscore = ddata.todayScore;
  const scored = dddscore * 100;
  let lacourbe = [dddscore];

  return (
  <div className="labarchart">
  <RadialBarChart
    width={circleSize}
    height={circleSize}
    cx={circleSize / 2}
    cy={circleSize / 2}
    innerRadius="80%"
    outerRadius="100%"
    barSize={12}
    data={lacourbe}
    startAngle={90}
    endAngle={-270}
    paddingAngle={0}
    cornerRadius={0}
    
    >
    <PolarAngleAxis
    type="number"
    domain={[0, 100]}
    angleAxisId={0}
    tick={false}
    
    />
    <RadialBar
    clockWise
    dataKey="value"
    cornerRadius={circleSize }
    fill="#FF0000"
    />
    <text
    x={circleSize / 2}
    y={circleSize / 2}
    textAnchor="middle"
    dominantBaseline="middle"
    className="progress-label"
    >
    
    </text>
  </RadialBarChart>
  <h3>Score</h3><h2>{scored}%</h2><p>de votre objectif</p>
</div>
  );
}

export default RadialChart;