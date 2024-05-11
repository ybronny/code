import BotCard from "./botspecs";

function YourBotArmy({ Bot }) {
  function handleClick() {
    const update = selectedBot.filter((bot) => bot.id !== id);
    console.log(update);
  }
  if (selectedBot.length !== 0) {
    return (
      <div >
        <div onClick={(e) => console.log(e.target)} >
          {Bot.map((bot) => (
            <BotCard key={bot.id} {...bot} />
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;