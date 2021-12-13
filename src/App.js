import React from 'react';
import RadarComp from './components/RadarComp';
import LineComp from './components/LineComp';
import BarComp from './components/BarComp';
import RadialComp from './components/RadialComp';
import Hearder from './components/Hearder';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import TitleUser from './components/TitleUser';
import './App.css'

function App() {
  return (
    <div>
      <div className=""><Hearder/></div>
      <div className="leftbar"><Leftbar/>
        <div className="main">
          <div className="letitre"><TitleUser/></div>
        <div className="legraf">
          <div className="recharts"><BarComp/>
            <div className="theprofile fontSize">
              <div className="laline"><LineComp /></div>
              <div className="leradar"><RadarComp /></div>
              <div className="leradial"><RadialComp /></div>
            </div>
            <div className="lelayer">
              <div className="colonnea"></div>
              <div className="colonneb"></div>
            </div>
          </div>
            <div className="rightbar"><Rightbar/></div>
        </div>

        </div>
      </div>

    </div>
  );
}

export default App;