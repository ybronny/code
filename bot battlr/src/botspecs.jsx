import React from "react";

function BotCard({
  name,
  catchphrase,
  health,
  damage,
  armor,
  avatar_url,
  id,
  setSelectedBot,
  selectedBot,
}) {
  function handleClick() {
    if (!selectedBot.find((bot) => bot.id === id)) {
      setSelectedBot([
        ...selectedBot,
        {
          id: id,
          name: name,
          health: health,
          damage: damage,
          armor: armor,
          avatar_url: avatar_url,
          catchphrase: catchphrase,
        },
      ]);
    }
  }
  return (
    <>
      <div onClick={handleClick}>
        <img src={avatar_url} alt="BOT POWER"/>
        <div >
          <div >{name}</div>
          <p >{catchphrase}</p>
        </div>
        <div >
          <span >{health}</span>
          <span > {damage} </span>
          <span >{armor}</span>
        </div>
      </div>
    </>
  );
}

export default BotCard;