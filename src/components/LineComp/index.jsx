import React from "react";
import { LineChart, Line, Tooltip } from "recharts";
import './thelinechart.css'
import { useAxios } from "use-axios-client";

/**
 * Get user 12 average-sessions data using axio api 
 * to render using recharts component, the smooth time line
 * CustomTooltip is necessary to render only the value
 * css is used to adjust the supperpositions
 * @param { Object } ddata
 * @param { Array } ddsessions
 */

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-line">
        <p className="label--line">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function LineComp() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12/average-sessions"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data.data;
  const ddsessions= ddata.sessions;

  return (
    <div className="lacourbe"><div className="letitre"><h3>Durée moyenne des sessions</h3></div>
    <LineChart
    width={258}
    height={120}
    data={ddsessions}
    margin={{top: 10, right: -2, left: -2, bottom: 20, }}
  >
    <Tooltip  cursor={false} labelStyle={{ display: "none" }} itemStyle={{ color: "#000" }} content={<CustomTooltip/>} 
    wrapperStyle={{zIndex: 1000}}/>
    <Line type="natural" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} zIndex={10}/>
  </LineChart>
  <div className="lasemaine"><h3>L M M J V S D</h3></div>
  </div>
  );
}

export default LineComp