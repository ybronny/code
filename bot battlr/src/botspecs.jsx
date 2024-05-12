import React from "react";
import "./index.css"

function BotCard({ bot }) {
  const handleClick = () => {
    document.getElementById(`bot-${bot.id}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={bot.avater_url} alt="bots pic" />
      <div class= "card-body">
      <p>id:{bot.id}</p>
      <h2 class="card-title">name:{bot.name}</h2>
      <p class="card-text">catchphrase:{bot.catchphrase}</p>
      <p class = "card-text">armor:{bot.armor}</p>
      <p class = "card-text">health:{bot.health}</p>
    </div>
    </div>
  );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

export default BotCard;
