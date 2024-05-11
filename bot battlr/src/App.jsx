import React, { useEffect, useState } from "react";
import Army from "../src/YourBotArmy";
import Collect from "../src/botcollection";

function App() {
  const [bots, setBots] = useState([]);
  const [Bot, SelectedBot] = useState([]);

  useEffect(() => {
    fetch("https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); 

  return (
    <div>
      <Army Bot={Bot} />
      <Collect Data={bots} SelectedBot={SelectedBot} Bot={Bot} />
    </div>
  );
}

export default App;