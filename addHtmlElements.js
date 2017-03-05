const initialBalance = 5000

function addPageElements(){
	const FONT = '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif'
	document.body.style.backgroundColor = "black"


	var containerDiv = document.createElement("div")
	containerDiv.id  = "container"
	containerDiv.style.position = "relative"
	containerDiv.style.background = 'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(38,137,64,1)), url("images/bg.png") repeat'
	containerDiv.style.width = "1000px"
	containerDiv.style.minHeight = "700px"
	containerDiv.style.borderRadius = "5px"
	containerDiv.style.margin = "0 auto"
	containerDiv.style["boxShadow"] = "inset 0px 0px 4px 27px rgba(73,49,28,1)"
	document.body.appendChild(containerDiv)

	//message
	var message = document.createElement("p")
	message.id = "message"
	message.style.position = "absolute"
	message.style.top = "150px"
	message.style.left = "460px"
	message.style.padding = "8px"
	message.style.visibility = "hidden"
	message.style.fontFamily = FONT
	message.style.fontSize = "20px"
	message.style.color = "white"
	containerDiv.appendChild(message)

	//-----------dealer div-----------
	var dealerDiv = document.createElement("div")
	dealerDiv.id  = "dealer-area"
	dealerDiv.style.width = "42%"
	dealerDiv.style.marginLeft = "8%"
	dealerDiv.style.minHeight = "400px"
	dealerDiv.style.cssFloat = "left"
	dealerDiv.style.perspective = "1000px"
	containerDiv.appendChild(dealerDiv)

	//dealer score display
	var dealerScoreDisplay = document.createElement("div")
	dealerScoreDisplay.id = "dealer-display"
	dealerScoreDisplay.style.position = "relative"
	dealerDiv.appendChild(dealerScoreDisplay)

	var dealerScoreMessage = document.createElement("p")
	dealerScoreMessage.id = "dealer-score"
	dealerScoreMessage.style.position = "absolute"
	dealerScoreMessage.style.left = "50px"
	dealerScoreMessage.style.top = "40px"
	dealerScoreMessage.style.fontSize = "18px"
	dealerScoreMessage.style.color = "transparent"
	dealerScoreMessage.style.fontFamily = FONT
	dealerScoreMessage.innerHTML = "Dealer"
	dealerScoreDisplay.appendChild(dealerScoreMessage)

	//-----------player div-----------
	var playerDiv = document.createElement("div")
	playerDiv.id  = "player-area"
	//playerDiv.style.position = "relative"
	playerDiv.style.width = "50%"
	playerDiv.style.minHeight = "400px"
	playerDiv.style.cssFloat = "left"
	containerDiv.appendChild(playerDiv)

	//player score display
	var playerScoreDisplay = document.createElement("div")
	playerScoreDisplay.id = "player-display"
	playerScoreDisplay.style.position = "absolute"
	playerScoreDisplay.style.right = "150px"
	playerScoreDisplay.style.top = "40px"
	playerDiv.appendChild(playerScoreDisplay)

	var playerScoreMessage = document.createElement("p")
	playerScoreMessage.id = "player-score"
	playerScoreMessage.style.fontSize = "16px"
	playerScoreMessage.style.color = "white"
	playerScoreMessage.style.fontFamily = FONT
	playerScoreDisplay.appendChild(playerScoreMessage)

	//-----------chip div-----------
	var chipDiv = document.createElement("div")
	chipDiv.id  = "chip-area"
	chipDiv.style.width = "320px"
	chipDiv.style.height = "250px"
	chipDiv.style.cssFloat = "left"
	chipDiv.style.marginLeft = "150px"
	containerDiv.appendChild(chipDiv)

	var chipIndexes = [1, 5, 25, 100, 500]
	var chipsArray = []
	for(let i=0;i<chipIndexes.length;i++){
		chipsArray[i] = new Chip(chipIndexes[i])
	}

	//reset wager button
	var resetWager = document.createElement("button")
	resetWager.id = "resetWager"
	resetWager.style.display = "inline-block"
	resetWager.style.minWidth = "130px"
	resetWager.style.marginTop = "20px"
	resetWager.style.padding = "8px"
	resetWager.style.borderRadius = "10px"
	resetWager.style.backgroundColor = "transparent"
	resetWager.style.color = "white"
	resetWager.style.fontFamily = FONT
	resetWager.style.fontSize = "16px"
	resetWager.style.marginLeft = "15px"
	resetWager.innerHTML = "Reset Wager"
	chipDiv.appendChild(resetWager)


	// balance display 
	var startingBalance = document.createElement("p")
	startingBalance.id = "balance"
	startingBalance.style.position = "absolute"
	startingBalance.style.top = "480px"
	startingBalance.style.left = "600px"
	startingBalance.style.boxSizing = "border-box"
	startingBalance.style.width = "600px"
	startingBalance.style.height = "160px"
	startingBalance.style.padding = "10px"
	startingBalance.style.borderRadius = "10px"
	startingBalance.style.color = "white"
	startingBalance.style.lineHeight = "40px"
	startingBalance.style.fontFamily = FONT
	startingBalance.style.fontSize = "18px"
	chipDiv.appendChild(startingBalance)
	changeBalanceDisplay(initialBalance)

	//-----------button div-----------
	var buttonDiv = document.createElement("div")
	buttonDiv.id  = "button-area"
	buttonDiv.style.width = "400px"
	buttonDiv.style.boxSizing = "border-box"
	buttonDiv.style.paddingLeft = "80px"
	buttonDiv.style.paddingTop = "40px"
	buttonDiv.style.cssFloat = "left"
	containerDiv.appendChild(buttonDiv)

	//dealButton
	var dealButton = document.createElement("button")
	dealButton.id = "deal"
	dealButton.innerHTML = "DEAL"
	dealButton.style.width = "60px"
	dealButton.style.borderRadius = "10px"
	dealButton.style.height = "60px"
	dealButton.style.color = "white"
	dealButton.style.backgroundColor = "transparent"
	dealButton.style.fontFamily = FONT
	dealButton.style.fontSize = "15px"
	dealButton.style.marginLeft = "15px"
	buttonDiv.appendChild(dealButton)

	//hitButton
	var hitButton = document.createElement("button")
	hitButton.id = "hit"
	hitButton.innerHTML = "HIT"
	hitButton.style.width = "60px"
	hitButton.style.borderRadius = "10px"
	hitButton.style.height = "60px"
	hitButton.style.color = "white"
	hitButton.style.backgroundColor = "transparent"
	hitButton.style.fontFamily = FONT
	hitButton.style.fontSize = "15px"
	hitButton.style.marginLeft = "15px"
	buttonDiv.appendChild(hitButton)

	//standButton
	var standButton = document.createElement("button")
	standButton.id = "stand"
	standButton.innerHTML = "STAND"
	standButton.style.width = "80px"
	standButton.style.borderRadius = "10px"
	standButton.style.height = "60px"
	standButton.style.color = "white"
	standButton.style.backgroundColor = "transparent"
	standButton.style.fontFamily = FONT
	standButton.style.fontSize = "15px"
	standButton.style.marginLeft = "15px"
	buttonDiv.appendChild(standButton)

	//menu area
	var menuArea = document.createElement('div')
	menuArea.id="menu-area"
	menuArea.style.width="100%"
	menuArea.style.height = "200px"
	menuArea.style.position = "absolute"
	menuArea.style.transition = "1s"
	buttonDiv.appendChild(menuArea)

	//menu button
	var menuBtn = document.createElement('button')
	menuBtn.id = "menu-button"
	menuBtn.style.position = "absolute"
	menuBtn.style.top = "50px"
	menuBtn.style.boxSizing = "border-box"
	menuBtn.style.left = "50px"
	menuBtn.style.width = "150px"
	menuBtn.innerHTML = "Menu"
	menuBtn.style.padding = "15px"
	menuBtn.style.borderRadius = "5px"
	menuBtn.style.fontFamily = FONT
	menuBtn.style.fontSize = "20px"
	menuBtn.style.color = "green"
	menuBtn.style.backgroundColor = "white"
	menuArea.appendChild(menuBtn)

	//overlay 
	var overlayArea = document.createElement('div')
	overlayArea.id = "overlay-area"
	overlayArea.style.width = "220px"
	overlayArea.style.top = "250px"
	overlayArea.style.left = "420px"
	overlayArea.style.height = "220px"
	overlayArea.style.position = "absolute"
	overlayArea.style.backgroundColor = "white"
	overlayArea.style.opacity = 0
	overlayArea.style.transition = "1s"
	containerDiv.appendChild(overlayArea)

	//reset button
	var resetBtn = document.createElement('button')
	resetBtn.id = "reset-button"
	resetBtn.style.position = "absolute"
	resetBtn.style.top = "50px"
	resetBtn.style.boxSizing = "border-box"
	resetBtn.style.left = "40px"
	resetBtn.style.width = "140px"
	resetBtn.innerHTML = "Reset"
	resetBtn.style.padding = "5px"
	resetBtn.style.borderRadius = "5px"
	resetBtn.style.fontFamily = FONT
	resetBtn.style.fontSize = "16px"
	resetBtn.style.color = "green"
	resetBtn.style.backgroundColor = "white"
	overlayArea.appendChild(resetBtn)

	//submit button
	var submitBtn = document.createElement('button')
	submitBtn.id = "submit-button"
	submitBtn.style.position = "absolute"
	submitBtn.style.top = "100px"
	submitBtn.style.boxSizing = "border-box"
	submitBtn.style.left = "40px"
	submitBtn.style.width = "140px"
	submitBtn.innerHTML = "Submit Balance"
	submitBtn.style.padding = "5px"
	submitBtn.style.borderRadius = "5px"
	submitBtn.style.fontFamily = FONT
	submitBtn.style.fontSize = "16px"
	submitBtn.style.color = "green"
	submitBtn.style.backgroundColor = "white"
	overlayArea.appendChild(submitBtn)

	//leader button
	var leaderBtn = document.createElement('button')
	leaderBtn.id = "leader-button"
	leaderBtn.style.position = "absolute"
	leaderBtn.style.top = "150px"
	leaderBtn.style.boxSizing = "border-box"
	leaderBtn.style.left = "40px"
	leaderBtn.style.width = "140px"
	leaderBtn.innerHTML = "Leader Board"
	leaderBtn.style.padding = "5px"
	leaderBtn.style.borderRadius = "5px"
	leaderBtn.style.fontFamily = FONT
	leaderBtn.style.fontSize = "16px"
	leaderBtn.style.color = "green"
	leaderBtn.style.backgroundColor = "white"
	overlayArea.appendChild(leaderBtn)

	//close menu button
	var closeBtn = document.createElement('button')
	closeBtn.id = "close-button"
	closeBtn.style.position = "absolute"
	closeBtn.style.boxSizing = "border-box"
	closeBtn.style.right = "0px"
	closeBtn.style.outline = "none"
	closeBtn.style.border = "none"
	closeBtn.innerHTML = "&#x274E;"
	closeBtn.style.padding = "5px"
	//closeBtn.style.borderRadius = "5px"
	closeBtn.style.fontFamily = FONT
	closeBtn.style.fontSize = "40px"
	closeBtn.style.color = "green"
	closeBtn.style.backgroundColor = "transparent"
	overlayArea.appendChild(closeBtn)


	//form area
	var formArea = document.createElement('div')
	formArea.id="form-area"
	formArea.style.top = "200px"
	formArea.style.right= "50px"
	formArea.style.width="400px"
	formArea.style.height = "200px"
	formArea.style.position = "absolute"
	formArea.style.opacity = 0
	formArea.style.transition = "0.3s"
	containerDiv.appendChild(formArea)

	//submit form
	var form = document.createElement('div')
	form.id = "submit-form"
	form.style.position = "absolute"
	form.style.top = "50px"
	form.style.boxSizing = "border-box"
	form.style.left = "20px"
	form.style.width = "300px"
	form.style.height = "200px"
	form.style.padding = "5px"
	form.style.borderRadius = "5px"
	form.style.fontFamily = FONT
	form.style.fontSize = "16px"
	form.style.color = "green"
	form.style.backgroundColor = "white"
	formArea.appendChild(form)

	//label
	var nameInput = document.createElement('label')
	nameInput.id = "user-name-label"
	nameInput.innerHTML = "Enter name:"
	nameInput.style.position = "absolute"
	nameInput.style.top = "10px"
	nameInput.style.boxSizing = "border-box"
	nameInput.style.left = "20px"
	nameInput.style.width = "140px"
	nameInput.style.padding = "5px"
	nameInput.style.borderRadius = "5px"
	nameInput.style.fontFamily = FONT
	nameInput.style.fontSize = "16px"
	nameInput.style.color = "green"
	nameInput.style.backgroundColor = "white"
	form.appendChild(nameInput)

	//input
	var nameInput = document.createElement('input')
	nameInput.id = "user-name"
	nameInput.style.position = "absolute"
	nameInput.style.top = "40px"
	nameInput.style.boxSizing = "border-box"
	nameInput.style.left = "20px"
	nameInput.style.width = "180px"
	nameInput.style.padding = "5px"
	nameInput.style.borderRadius = "5px"
	nameInput.style.fontFamily = FONT
	nameInput.style.fontSize = "16px"
	nameInput.style.color = "green"
	nameInput.style.backgroundColor = "white"
	form.appendChild(nameInput)

	//balance paragraph
	var currentBalance = document.createElement('p')
	currentBalance.id = "current-balance"
	currentBalance.style.position = "absolute"
	currentBalance.style.top = "70px"
	currentBalance.style.boxSizing = "border-box"
	currentBalance.style.left = "20px"
	currentBalance.style.fontFamily = FONT
	currentBalance.style.fontSize = "16px"
	currentBalance.style.color = "black"
	form.appendChild(currentBalance)

	//submit score button
	var submitBalanceBtn = document.createElement('button')
	submitBalanceBtn.id = "submit-balance-button"
	submitBalanceBtn.style.position = "absolute"
	submitBalanceBtn.style.top = "120px"
	submitBalanceBtn.style.boxSizing = "border-box"
	submitBalanceBtn.style.left = "20px"
	submitBalanceBtn.style.width = "140px"
	submitBalanceBtn.innerHTML = "Submit Now"
	submitBalanceBtn.style.padding = "5px"
	submitBalanceBtn.style.borderRadius = "5px"
	submitBalanceBtn.style.fontFamily = FONT
	submitBalanceBtn.style.fontSize = "16px"
	submitBalanceBtn.style.color = "white"
	submitBalanceBtn.style.backgroundColor = "green"
	form.appendChild(submitBalanceBtn)

	//score Board


}