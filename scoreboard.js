onload = function(){
    
    var table = document.getElementById('score-table')

    const databaseRef = firebase.database().ref().child('playerScores')
    databaseRef.orderByChild('balance').on('child_added',snap => {
        console.log(snap.val().name)
        //for(let key in snap.val()) {
        var playerScoreObject = document.createElement('tr')
        table.appendChild(playerScoreObject)   
        var playerName = document.createElement('td')
        var playerBalance = document.createElement('td')
        var playerTime = document.createElement('td')
        playerName.innerHTML = snap.val().name
        playerBalance.innerHTML = '$' + parseInt(snap.val().balance)*(-1)
        var time = snap.val().date
        var string = new Date(time)
        playerTime.innerHTML = string.getFullYear() + '/' + (parseInt(string.getMonth()) + 1) + '/'+ string.getDate()
        playerScoreObject.appendChild(playerName)
        playerScoreObject.appendChild(playerBalance)
        playerScoreObject.appendChild(playerTime)
        //}
    })
}
