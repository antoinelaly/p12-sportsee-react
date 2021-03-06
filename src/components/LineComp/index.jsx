import React from "react";
import { LineChart, Line, Tooltip } from "recharts";
import './thelinechart.css'
import { useFetch } from '../../utils/hooks'
import PropTypes from 'prop-types';

/**
 * Get data using axio api to render using recharts component
 * CustomTooltip is necessary to render only the value
 * css is used to adjust the supperpositions
 * @param { Object } ddata - user 12 average-sessions
 * @param { Array } props.ddsessions - the smooth time line
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

  const { data, isLoading, error } = useFetch( 
    `http://localhost:8000/user/12/average-sessions`
  )

  if (isLoading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data?.data;
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

LineComp.propTypes = {
  ddsessions: PropTypes.array.isRequired,
}

export default LineComp