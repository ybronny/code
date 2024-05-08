import React from 'react';
import bot from "./db.json"


const handleReleaseClick = () => {
    releaseBot(bot.id);
  };

  const handleDischargeClick = () => {
    dischargeBot(bot.id);
  };


const BotProfile = ({ }) => {
  return (
    <div class="card" style="width: 18rem;">
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>image: {bot.avater_url}</p>
      <p>catchphrase:{bot.catchphrase}</p>

      <button onClick={handleReleaseClick}>Release</button>
      <button onClick={handleDischargeClick}>Discharge</button>
    </div>

  )};
  
export default BotProfile;