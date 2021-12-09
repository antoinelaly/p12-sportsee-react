import styled from 'styled-components'
import relax from '../../assets/relax.svg'
import nage from '../../assets/nage.svg'
import velo from '../../assets/velo.svg'
import alter from '../../assets/alter.svg'
import './leftbar.css'

const NavPictos = styled.img`
  height: 64px;
  width: 64px;
  color: #FF6060;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    height: 45px;
    width: 140px;
}
`

const PictoContainer = styled.nav`
  padding: 200px 20px;
  background-color: #020203;
  color: #fff;
`

function Leftbar() {
  return (
    <PictoContainer>
      <div to="#"> <NavPictos src={relax} /></div>
      <div to="#"> <NavPictos src={nage} /></div>
      <div to="#"> <NavPictos src={velo} /></div>
      <div to="#"> <NavPictos src={alter} /></div>
      <div className="copi" >
        <p>Copiryght, SportSee 2020</p>
        </div>
    </PictoContainer>
  )
}

export default Leftbar
