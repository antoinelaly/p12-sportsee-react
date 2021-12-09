import styled from 'styled-components'
import calories from '../../assets/calories-icon.svg'
import protein from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'
import './rightbar.css'
import { useAxios } from "use-axios-client";

const NavPictos = styled.img`
  height: 64px;
  width: 64px;
  color: #FF6060;
  @media (max-width: 767px) {
    height: 45px;
    width: 140px;
}
`

const PictoContainer = styled.nav`
width: 100px
  padding: 20px;
  color: #fff;
`

function Rightbar() {
  const { data, error, loading } = useAxios({
    url: "http://localhost:8000/user/12"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  const ddata = data?.data;
  const ddkeyData = ddata.keyData;
  const ddkeycalorie = ddkeyData.calorieCount;
  const ddkeyprotein = ddkeyData.proteinCount;
  const ddkeyglu = ddkeyData.carbohydrateCount;
  const ddkeylip = ddkeyData.lipidCount;
  const ddkc = ddkeycalorie / 1000;

  return (
    <PictoContainer>
      <div className="keydata" to="#"> <NavPictos src={calories} alt="calories"/>
        <div className="datatext"><h3>{ddkc}Carl</h3><p>Calories</p></div>
      </div>
      <div className="keydata" to="#"> <NavPictos src={protein} />
        <div className="datatext"><h3>{ddkeyprotein}g</h3><p>Proteines</p></div>
      </div>
      <div className="keydata" to="#"> <NavPictos src={carbs} />
        <div className="datatext"><h3>{ddkeyglu}g</h3><p>Glucides</p></div>
      </div>
      <div className="keydata" to="#"> <NavPictos src={fat} />
        <div className="datatext"><h3>{ddkeylip}g</h3><p>Lipides</p></div>
      </div>
      <div className="copi" >Copiryght, SportSee 2020</div>
    </PictoContainer>
  )
}

export default Rightbar
