import React from "react";
import BotCard from "./botspecs";

function BotCollection({ botsData, setSelectedBot, selectedBot }) {
  return (
    <div >
      {botsData.map((bot) => (
        <BotCard key={bot.id} {...bot} setSelectedBot={setSelectedBot} selectedBot={selectedBot} />
      ))}
    </div>
  );
}

export default BotCollection;