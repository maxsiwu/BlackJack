//card object and functions related to cards
var Cards = function (){
	const OFFSET = 20 //they way card appears
	var packNum = 2
	var ranks = new Array("A","2","3","4","5","6","7","8","9","10","J","Q","K")
	var suits = new Array("C","D","H","S")
	var deckNum = ranks.length * suits.length
	var counter = 0
	this.cardCounter = 104

	this.cardArray = new Array(packNum * deckNum)
	for(let i=0;i<packNum;i++){
		for(let j=0;j<ranks.length;j++){
			for(let k=0;k<suits.length;k++)
				this.cardArray[i*(suits.length*ranks.length) + j*suits.length + k] = ranks[j] + suits[k]
		}
	}

	this.getRandIndex = function(cards){
		var randIndex = Math.floor(Math.random()*cards.length)
		return randIndex
	}
	this.addCardToPage = function(party,parentDiv,cardFaceValue,top,left){
		var addCard = document.createElement("img")
		addCard.id = party +  "-" + cardFaceValue
		addCard.className = party
		addCard.src = "images/cards2/" + cardFaceValue + ".jpg"
		addCard.style.borderRadius = "5px"
		addCard.style.boxShadow = "3px 3px 10px rgba(0,0,0, 0.7)"
		addCard.style.position = "absolute"
		counter++
		addCard.style.top = "" + top + "px"
		addCard.style.left = "" + left + "px"
		addCard.style.zIndex = counter
		addCard.width = 150
		addCard.style.transformStyle = "preserve-3d"
		addCard.style.transition = "transform 0.5s"
		addCard.style.transform = "scale(0)"
		document.getElementById(parentDiv).appendChild(addCard)
		setTimeout(function(){
			addCard.style.transform = "scale(1)"
		}, 300)
		this.cardCounter--
	}

	this.removeCard = function(id){
		var element = document.getElementById(id);
    	document.getElementById(id).parentNode.removeChild(element)
	}

	this.countValue = function(card){
		var cardValue = 0
		if(card.indexOf('A') > -1){
			cardValue = 11
		}else if(card.indexOf('J') > -1 || card.indexOf('Q') > -1 || card.indexOf('K') > -1 ){
			cardValue = 10
		}else{
			cardValue = parseInt(card)
		}
		return cardValue
	}
	this.addCardFinal = function(className, area, faceValue){
	  var top = 100
	  var left = 650
	  if(className == "dealerCards"){
	    left = 100
	  }
	  var childArray = document.getElementById(area).childNodes
	  if(childArray.length > 1){
	    var previous = childArray[childArray.length-1]
	    top = parseInt(previous.style.top) + OFFSET
	    left = parseInt(previous.style.left) + OFFSET
	  }
	  this.addCardToPage(className, area ,faceValue ,top, left)
	}
	this.flip = function(dealerHiddenValue){
		var secondCard = document.getElementsByClassName('dealerCards')[1]
		secondCard.style.transform = "rotateY( 180deg ) "
		secondCard.src = "images/cards2/" + dealerHiddenValue + ".jpg"
		secondCard.style.transform = "rotateY( 180deg ) scaleX(-1)"
	}
	//slide - to do
}