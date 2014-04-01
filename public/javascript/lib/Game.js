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

Game.prototype.VERBS = {
  scissors_paper:   "cut",
  paper_rock:       "covers",
  rock_lizard:      "squashes",
  lizard_spock:     "poisons",
  spock_scissors:   "smashes",
  scissors_lizard:  "decapitate",
  lizard_paper:     "eats",
  paper_spock:      "disproves",
  spock_rock:       "vaporizes",
  rock_scissors:    "crushes"
}

Game.prototype._verb = function(){
  var winner_pick = this.winner().pick;
  var loser_pick = this.loser().pick;
  return this.VERBS[winner_pick+"_"+loser_pick];
}

Game.prototype.endMessage = function(){
  if(this.winner()){
    var winner = this.winner();
    var loser = this.loser();
    return capitalise(winner.pick) + " " + this._verb() + " " + capitalise(loser.pick) + "! " + winner.name + " wins! Sorry " + loser.name;
  }else{
    return("Draw");
  }
}

function capitalise(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}