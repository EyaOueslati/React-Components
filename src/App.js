import React from "react";
import "./App.css";
import MyPhoto from "./Component/Profile/ProfilPhoto";
import MyFullName from "./Component/Profile/FullName";
import MyAddress from "./Component/Profile/Address";
function App() {
  return (
    <div style= {{ marginLeft: 'auto',
      marginRight: 'auto',
      width: '27em' }}>
      <div className="card">
        <MyPhoto />

        <div className="text_card"style= {{ marginLeft: 'auto',
      marginRight: 'auto',
      width: '7em' }} >
          <MyFullName />
          <MyAddress />
        </div>
      </div>
    </div>
  );
}

export default App;
