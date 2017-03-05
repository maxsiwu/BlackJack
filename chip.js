//chip object
var Chip = function(i){
	//add chip to html
	var chip = document.createElement("div")	
	document.getElementById('chip-area').appendChild(chip)

	chip.id = "chip-" + i
	chip.className = "chips"
	chip.style.width = "100px"
	chip.style.height = "100px"
	chip.style.backgroundImage = 'url("images/chips/' + i + '.png")'
	chip.style.backgroundSize = 'contain'
	chip.style.textAlign = "center"
	chip.style.lineHeight = "100px"
	chip.style.borderRadius = "100%"
	chip.style.boxShadow = "3px 3px 10px rgba(0,0,0, 0.7)"
	chip.style.float = "left"
	chip.innerHTML = i
}