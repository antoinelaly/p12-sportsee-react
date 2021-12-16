import React from 'react';
import renderPolarAngleAxis from '../renderPolarAngleAxis';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, } from 'recharts';
import { useAxios } from "use-axios-client";

/**
 * Get data using axio api & render using recharts component
 * renderPolarAngleAxis is used to adjust the texts position
 * @param { Object } ddata - user 12 performances, data & description
 * @param { Array } dddata - value & index
 * @param { Object } ddatakind - index & description
 * @param { Array } rkind - ddatakind in array to be merge with dddata
 * @param { Array } props.dataradar - radar map merged data with 3 values 
 */

function RadarComp() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12/performance"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

const ddata = data?.data;
const dddata = ddata.data;
const ddatakind = ddata.kind;

// ddatakind {object} to rkind {array} 
const rkind = Object.keys(ddatakind).map(e => ({kind: e, A: ddatakind[e]}))

function mergeArrayObjects(item,id){
  return dddata.map((item,i) => {
      if(item.id === rkind[i].id){
          //merging two objects
        return Object.assign({},item,rkind[i])
      } else {
        return null;
      }
  })
}

const dataradar = mergeArrayObjects(dddata,rkind);

  return (
    <div>
    <RadarChart cx={124} cy={130} outerRadius={70} width={258} height={263} data={dataradar} >
      <PolarGrid gridType='' stroke="#fff" />
      <angleAxis stroke="#000" />
      <PolarAngleAxis dataKey="A" tick={props => renderPolarAngleAxis(props)}/>
      <recharts-polar-grid-angle fill="#FF0101" stroke="#000" />
      <PolarAngleAxis dataKey="A" stroke="#fff" verticalAnchor="middle" />
      <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
    </RadarChart>
    </div>
  );
}

export default RadarComp