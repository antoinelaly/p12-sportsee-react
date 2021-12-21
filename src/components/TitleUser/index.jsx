import React from "react";
import './main.css'
import { useAxios } from "use-axios-client";
import PropTypes from 'prop-types'

/**
 * Get generic user 12 data using axio api 
 * to render the title with the user first name
 * @param { Object } ddata
 * @param { Object } dduser
 * @param { string } ddufirst
 */
function TheTitleUser() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data?.data;
  const dduser = ddata.userInfos;
  const ddufirst = dduser.firstName;

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

TheTitleUser.propTypes = {
  ddufirst: PropTypes.string.isRequired,
}

export default TheTitleUser