
import React from 'react';
import bot from "../src/db.json"


const BotSpecs = ({ enlistBot }) => {


  const handleEnlist = () => {
    enlistBot(bot);
    
  };

  return (
    <div>
      
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
