import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './barchart.css'
import { useAxios } from "use-axios-client";
import moment from 'moment'; 
import PropTypes from 'prop-types'

/**
 * Get data using axio api to render using recharts component, 
 * CustomTooltip is necessary to render only the values
 * moment component is necessary to adjust the dates rending
 * @param { Object } ddata - user 12 activity 
 * @param { Array } props.ddsessions - the vartical bars
 */
const CustomTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const formatXAxis = tickItem => {
  return moment(tickItem).format('D');
}

function BarComp(){
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12/activity"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data.data;
  const ddsessions= ddata.sessions;

  return (
    <div className="labarre"><h5>Activité quotidienne</h5>
      <BarChart
        width={835}
        height={320}
        data={ddsessions}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} tickCount={3} />
        <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false}  tickFormatter={formatXAxis}/>
        <YAxis yAxisId="right" type="number" domain={['dataMin - 20', 'dataMax + 10']} tickCount={4} stroke="#9B9EAC" orientation="right" tickLine={false} axisLine={false} />
        <YAxis yAxisId="right" type="number" domain={['dataMin - 20', 'dataMax + 10']} tickCount={3} orientation="right" stroke="#9B9EAC"  tickLine={false}/>
        <Tooltip    content={<CustomTooltip/>} itemStyle={{ color: "#fff" }}/>
        <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
        <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </div>
  );
}

BarComp.propTypes = {
  ddsessions: PropTypes.array.isRequired,
}

export default BarComp