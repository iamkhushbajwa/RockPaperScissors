function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
	scissors:  {beats: ["paper", "lizard"]},
  paper:     {beats: ["rock", "spock"]},
  rock:      {beats: ["lizard", "scissors"]},
  lizard:    {beats: ["spock", "paper"]},
  spock:     {beats: ["scissors", "rock"]}
}

Game.prototype.winner = function() {
  if (this._isSamePick())
    return null;
  else if(this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) >= 0)
    return this.player1;
  else
    return this.player2;
}

Game.prototype._isSamePick = function(){
  return this.player1.pick === this.player2.pick
}

Game.prototype.loser = function(){
  return this.winner() === this.player1 ? this.player2 : this.player1
}

Game.prototype.verb = function(){
  var winner_pick = this.winner().pick;
  var loser_pick = this.loser().pick;
  if(winner_pick === "scissors" && loser_pick === "paper") return "cut";
  if(winner_pick === "paper" && loser_pick === "rock") return "covers";
  if(winner_pick === "rock" && loser_pick === "lizard") return "crushes";
  if(winner_pick === "lizard" && loser_pick === "spock") return "poisons";
  if(winner_pick === "spock" && loser_pick === "scissors") return "smashes";
  if(winner_pick === "scissors" && loser_pick === "lizard") return "decapitate";
  if(winner_pick === "lizard" && loser_pick === "paper") return "eats";
  if(winner_pick === "paper" && loser_pick === "spock") return "disproves";
  if(winner_pick === "spock" && loser_pick === "rock") return "vaporizes";
  if(winner_pick === "rock" && loser_pick === "scissors") return "crushes";
}

Game.prototype.endMessage = function(){
  var winner = this.winner();
  var loser = this.loser();
  var verb = this.verb();
  return winner.pick + " " + verb + " " + loser.pick + "! " + winner.name + " wins! Sorry " + loser.name;
}