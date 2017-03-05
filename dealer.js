var Dealer = function(){
	var cards = new Cards()
	var scoresDisplay = document.getElementById('dealer-score')
	this.hasAce = false
	this.hiddenValue = ""
	this.totalCardVal = 0


	this.addScore = function(hand){
		this.totalCardVal += cards.countValue(hand)
	}
	this.getHiddenValue = function(i, facevalue){
		if(i==1){
		  	var secondCard = document.getElementsByClassName('dealerCards')[1]
          	secondCard.src = "images/cards2/back1.jpg"
          	this.hiddenValue = facevalue
        }
	}
	this.checkForAce = function(card){
		if(card.indexOf('A') > -1){
	       this.hasAce = true
	    }
	}
	this.getFinalValue = function(){
		if(this.hasAce && this.totalCardVal > 21){
	      this.totalCardVal = this.totalCardVal - 10
	    }
		this.hasAce = false
	}
	this.displayScores = function(){
		scoresDisplay.innerHTML = "Dealer: " + this.totalCardVal
	}
}