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
  if (this.isSamePick())
    return null;
  else if(this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) >= 0)
    return this.player1;
  else
    return this.player2;
}

Game.prototype.isSamePick = function(){
  return this.player1.pick === this.player2.pick
}

Game.prototype.loser = function(){
  return this.winner() === this.player1 ? this.player2 : this.player1
}

Game.prototype.endMessage = function(){
  var winner = this.winner();
  var loser = this.loser();
  return winner.pick + " beats " + loser.pick + "! " + winner.name + " wins! Sorry " + loser.name;
}