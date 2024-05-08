import React from 'react';
import bot from "../src/db.json"

const  setEnlistedBots = React.useState

const enlistBot = {bot} 
    setEnlistedBots([...enlistBot, bot]);
    if (!enlistBot.some(eBot => eBot.id === bot.id)) {
        setEnlistedBots([...enlistBot, bot]);
      } else {
        console.log('Bot already enlisted');
      }

  const releaseBot = {bot} 
    setEnlistedBots(enlistBot.filter(bot => bot.id !== botId));
    


const BotCollection = ({}) => {
  return (
    <div>
      {bot} = (
        <BotProfile key={bot.id} bot={bot} />
      )
    </div>
  );
};



<h2>Bot Collection</h2>
{bot.map(bot => (
  <BotProfile
    key={bot.id}
    bot={bot}
    enlistBot={enlistBot}
    releaseBot={releaseBot}
  />
))}
export default BotCollection;
