  //game object
var Game = function() {
  addPageElements()
  var canStartGame = true
  var balance = initialBalance
  var potentialBalance = 0
  var wager = 0
  var cards = new Cards()
  var player = new Player()
  var dealer = new Dealer()
  var deck = cards.cardArray
  var playerHand = []
  var dealerHand = []
  var dealBtn = document.getElementById('deal')
  var hitBtn = document.getElementById('hit')
  var standBtn = document.getElementById('stand')
  var resetBtn = document.getElementById('reset-button')
  var submitBtn = document.getElementById('submit-button')
  var leaderBtn = document.getElementById('leader-button')
  var closeBtn = document.getElementById('close-button')
  var menuBtn = document.getElementById('menu-button')
  var message = document.getElementById('message')
  var allChips = document.getElementsByClassName("chips")
  var resetWager = document.getElementById('resetWager')
  var overlayArea = document.getElementById('overlay-area')
  var balanceTosubmit = document.getElementById('current-balance')
  var formDiv = document.getElementById('form-area')
  var submitBalanceBtn = document.getElementById('submit-balance-button')
  var input = document.getElementById("user-name")

  dealBtn.disabled = true
  hitBtn.disabled = true
  standBtn.disabled = true
  resetBtn.disabled = true
  submitBalanceBtn.disabled = true

  //--------------------------all click functions--------------------------//
  dealBtn.onclick = function(){
    if(wager > 0){
      
      dealBtn.disabled = true
      hitBtn.disabled = false
      standBtn.disabled = false
      resetWager.disabled = true
      deal()
    }
  }
  standBtn.onclick = function(){
    stand()  
  }
  hitBtn.onclick = function(){
    hit()
  }
  //click function for chips
  for(let i=0;i<allChips.length;i++){
    allChips[i].onclick = function(){
      if(canStartGame){
        var chipId = allChips[i].id.split('-').pop()
        bet(parseInt(chipId))
        document.getElementById("deal").disabled = false
        //if(canStartGame){
          removeLastRound()
          player.displayScores()
        //}
      }
    }
  }
  //reset bet
  resetWager.onclick = function(){
    wager = 0
    balance = balance + potentialBalance
    resetWager.innerHTML = "&#x274E; Wager $" + wager
    changeBalanceDisplay(balance)
    potentialBalance = 0
  }
  //--------------------------functions used for the clicks--------------------------//
  function bet(chipId){
    if(canStartGame){
      if(balance >= chipId){
        balance = balance - chipId
        potentialBalance = potentialBalance + chipId
        wager = wager + chipId
      }
    }
    showMessage("")
    changeBalanceDisplay(balance)
    resetWager.innerHTML = "&#x274E; Wager $" + wager
    document.getElementById('dealer-score').innerHTML = "Dealer"
  }//end of bet function

  function deal(){
    message.innerHTML = ""
    document.getElementById('dealer-score').style.color = "white"
    canStartGame = false
    for(let i=0;i<2;i++){
      var index = cards.getRandIndex(deck)
      playerHand.push(deck[index])
      cards.addCardFinal("playerCards", "player-area", deck[index])
      deck.splice(index,1)
      player.addScore(playerHand[i])
      player.checkForAce(playerHand[i])
      shuffle()
    }
    for(let i=0;i<2;i++){
      var index = cards.getRandIndex(deck)
      dealerHand.push(deck[index])
      cards.addCardFinal("dealerCards", "dealer-area", deck[index])
      dealer.getHiddenValue(i,deck[index])
      deck.splice(index,1)
      dealer.addScore(dealerHand[i])
      dealer.checkForAce(playerHand[i])
      shuffle()
    }
    player.getFinalValue()
    dealer.getFinalValue()
    player.displayScores()
    document.getElementById('chip-area').style.filter = "grayscale(100%)"
    if(player.totalCardVal == 21 && dealer.totalCardVal != 21){
      cards.flip(dealer.hiddenValue)//flip
      showMessage("You Won")
      canDeal()
    }else if(player.totalCardVal == 21 && dealer.totalCardVal == 21){
      cards.flip(dealer.hiddenValue)//flip
      showMessage("Push")
      canDeal()
    }
  }//end of deal function

  function hit(){
    console.log(balance)
    if(player.totalCardVal<=21){
      var index = cards.getRandIndex(deck)
      playerHand.push(deck[index])
      if(deck[index].indexOf('A') > -1){
        player.hasAce = true
      }
      player.addScore(deck[index])
      player.getFinalValue()
      cards.addCardFinal("playerCards", "player-area", deck[index])
      player.displayScores()
      deck.splice(index,1)
      shuffle()
    }
    
    if(player.totalCardVal > 21){
      cards.flip(dealer.hiddenValue)//flip
      showMessage("Busted!")
      canDeal()
    }else if(player.totalCardVal == 21 && dealer.totalCardVal != 21){
      cards.flip(dealer.hiddenValue)//flip
      showMessage("You Won")
      balance += wager*2
      canDeal()
    }else if(player.totalCardVal == dealer.totalCardVal && player.totalCardVal>=21 && dealer.totalCardVal >= 21){
      cards.flip(dealer.hiddenValue)//flip
      showMessage("Push")
      canDeal()
    }
    changeBalanceDisplay(balance)
  }//end of hit function

  function stand(){
    cards.flip(dealer.hiddenValue)//flip
    while(dealer.totalCardVal<17){
      var index = cards.getRandIndex(deck)
      dealerHand.push(deck[index])
      if(deck[index].indexOf('A') > -1){
        dealer.hasAce = true
      }
      dealer.addScore(deck[index])
      dealer.getFinalValue()
      cards.addCardFinal("dealerCards", "dealer-area", deck[index])
      deck.splice(index,1)
      shuffle()
      dealer.hasAce = false
    }
    if(Math.abs(dealer.totalCardVal-21) > Math.abs(player.totalCardVal-21) || dealer.totalCardVal > 21){
      showMessage("You won")
      balance = balance + wager*2
      potentialBalance = 0
    }else if(player.totalCardVal == dealer.totalCardVal){
      showMessage("Push")
      balance = balance + wager
      potentialBalance = 0
    }else {
      showMessage("You Lost")
    }
    player.displayScores()
    dealer.displayScores()
    changeBalanceDisplay(balance)
    canDeal()
    console.log(dealer.totalCardVal)
    console.log(dealerHand)
    console.log(player.totalCardVal)
    console.log(playerHand)
    console.log(deck)
    console.log(cards.cardCounter)
  }//end of stand function

  function canDeal(){
    dealBtn.disabled = true
    hitBtn.disabled = true
    standBtn.disabled = true
    resetWager.disabled = false
    wager = 0
    potentialBalance = 0
    canStartGame = true
    dealer.hasAce = false
    player.hasAce = false
    document.getElementById('chip-area').style.filter = "grayscale(0%)";
    dealer.displayScores()
    if(balance == 0 && canStartGame){
      brokeBtn.disabled = false
      broke()
    }
  }

  function removeLastRound(){
    var pCards = document.getElementsByClassName('playerCards')
    var dCards = document.getElementsByClassName('dealerCards')
    while(pCards.length>0){
      cards.removeCard(pCards[0].id)
    }
    while(dCards.length>0){
      cards.removeCard(dCards[0].id)
    }
    playerHand = []
    dealerHand = []
    player.totalCardVal = 0
    dealer.totalCardVal = 0
  }
  function showMessage(string){
    message.innerHTML = string
    setTimeout(function(){
      message.style.visibility = "visible"
    },300)
  }
  //if running out of cards
  function shuffle(){
    if(cards.cardCounter <= 0){
      showMessage("Cards Shuffled")
      var newCards = new Cards()
      deck = deck.concat(newCards.cardArray)
      cards.cardCounter = 104
    }
  }
/* 
============================================
                 Menu Buttons
============================================
*/
  function broke(){
    showMessage("$0 left")
    setTimeout(function(){
      removeLastRound()
    },3500)
  }

  menuBtn.onclick = function(){
    if(overlayArea.style.opacity == 0){
      overlayArea.style.opacity = 0.7;
      resetBtn.disabled = false
    }else{
      overlayArea.style.opacity = 0;
      resetBtn.disabled = true    
    }
  }

  closeBtn.onclick = function(){
    menuBtn.onclick();
  }

  resetBtn.onclick = function(){
    removeLastRound()
    wager = 0
    balance = 5000
    changeBalanceDisplay(balance)
    resetWager.innerHTML = "Wager TBD"
    dealer.totalCardVal = 0
    player.totalCardVal = 0
    player.displayScores()
    dealer.displayScores()
    playerHand = []
    dealerHand = []
    var newCards = new Cards()
    deck = newCards.cardArray
    setTimeout(function(){
      document.getElementById('broke-area').style.opacity = 0
      showMessage("")
    },300)
    brokeBtn.disabled = true
  }

  submitBtn.onclick = function(){
    balanceTosubmit.innerHTML = "Your current balance is: $" + (balance + wager)
    formDiv.style.opacity = 1
    submitBalanceBtn.disabled = false;
  }

  submitBalanceBtn.onclick = function(){
    if(input.value == ''){
      alert('You have no name')
    }else{
      formDiv.style.opacity = 0
      submitBalanceBtn.disabled = true
      playerBalance = {name: input.value, balance: balance}
      const databaseRef = firebase.database().ref().child('playerScores')
      databaseRef.push(playerBalance)
    }
  }
}

function changeBalanceDisplay(balanceAmount){
    document.getElementById('balance').innerHTML = "Balance $" + balanceAmount //add balance
}

