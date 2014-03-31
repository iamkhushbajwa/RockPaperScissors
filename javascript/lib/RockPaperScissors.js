PAIRS = {
	"scissors":  ["paper", "lizard"],
  "paper":     ["rock", "spock"],
  "rock":      ["lizard", "scissors"],
  "lizard":    ["spock", "paper"],
  "spock":     ["scissors", "rock"]
}

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

Game.prototype.winner = function() {
  if (this.player1.pick == this.player2.pick)
    return null;
  else if(PAIRS[this.player1.pick].indexOf(this.player2.pick) >= 0)
    return this.player1;
  else
    return this.player2;
}

Game.prototype.loser = function(){
  return this.winner() == this.player1 ? this.player2 : this.player1
}

Game.prototype.endMessage = function(){
  var winner = this.winner();
  var loser = this.loser();
  return winner.pick + " beats " + loser.pick + "! " + winner.name + " wins! Sorry " + loser.name;
}