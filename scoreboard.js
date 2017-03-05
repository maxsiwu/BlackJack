onload = function(){
    
    var table = document.getElementById('score-table')

    const databaseRef = firebase.database().ref().child('playerScores')
    databaseRef.on('value',snap => {
        console.log(snap.val())

        for(let key in snap.val()) {
            var playerScoreObject = document.createElement('tr')
            table.appendChild(playerScoreObject)   
            var playerName = document.createElement('td')
            var playerBalance = document.createElement('td')
            playerName.innerHTML = snap.val()[key].name
            playerBalance.innerHTML = '$' + snap.val()[key].balance
            playerScoreObject.appendChild(playerName)
            playerScoreObject.appendChild(playerBalance)
        };
    })
}
