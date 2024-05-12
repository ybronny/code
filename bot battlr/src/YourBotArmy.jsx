import React from "react";
import BotCard from "./botspecs";

function YourBotArmy({ selectedBot }) {
  function handleClick(id) {
    const update = selectedBot.filter((bot) => bot.id !== id);
    console.log(update);
  }

  if (selectedBot.length !== 0) {
    return (
      <div>
        <div onClick={(e) => console.log(e.target)}>
          {selectedBot.map((bot) => (
            <BotCard key={bot.id} {...bot} />
          ))}
        </div>
      </div>
    );
  } else {
    
    return <div>Your Bot Army is empty</div>;
  }
}

export default YourBotArmy;
