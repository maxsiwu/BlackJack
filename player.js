var Player = function(){
	var cards = new Cards()
	var scoresDisplay = document.getElementById('player-score')
	this.hasAce = false
	this.totalCardVal = 0

	this.addScore = function(hand){
		this.totalCardVal += cards.countValue(hand)
	}
	this.displayScores = function(){
		scoresDisplay.innerHTML = "Player: " + this.totalCardVal
	}
	this.checkForAce = function(card){
		if(card.indexOf('A') > -1){
	       this.hasAce = true
	    }
	}
	this.getFinalValue = function(){
		if(this.hasAce && this.totalCardVal > 21){
	      this.totalCardVal = this.totalCardVal - 10
	      this.hasAce = false
	    }
	}
}