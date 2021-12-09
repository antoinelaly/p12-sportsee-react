import React from "react";
import './main.css'
import { useAxios } from "use-axios-client";


function Title() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data.data;
  const dduser = ddata.userInfos;
  const ddufirst= dduser.firstName;

  return (
    <div>
      <h1>Bonjour {ddufirst}</h1>
      <div className="lesmains">
        <h6>Félicitation ! Vous avez explosé vos objectifs hier </h6>
        <div className="clap">👏</div>
      </div>
    </div>
  );
}

export default Title