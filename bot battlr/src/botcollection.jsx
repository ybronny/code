import React from "react";
import BotCard from "./botspecs";

function BotCollection({ botsData }) {
  return (
    <div>
      {botsData.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;
