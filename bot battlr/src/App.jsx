import React, { useState, useEffect } from "react";
import BotCollection from "../src/botcollection";

function App() {
  const [botsData, setBotsData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/bots");
        const data = await response.json();
        setBotsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Bots Assembled</h1>
      <BotCollection botsData={botsData} />
    </div>
  );
}

export default App;
