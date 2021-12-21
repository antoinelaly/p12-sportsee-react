import React from 'react';
import { useAxios } from "use-axios-client";


function Ddata(){
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12/activity"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data.data;
  const ddsessions= ddata.sessions;
  console.log("ddsessions", ddsessions);

  return (
    <div className="labarre"><h5>Activité quotidienne</h5>


    </div>
  );
}


export default Ddata