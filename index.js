document.getElementById("home-one-plus").textContent = "+1"
document.getElementById("home-two-plus").textContent = "+2"
document.getElementById("home-three-plus").textContent = "+3"
document.getElementById("guest-one-plus").textContent = "+1"
document.getElementById("guest-two-plus").textContent = "+2"
document.getElementById("guest-three-plus").textContent = "+3"
document.getElementById("guest-total-scores").textContent = "0"
document.getElementById("home-total-scores").textContent = "0"

let homeScoreEl = document.getElementById("home-total-scores")
let guestScoreEl = document.getElementById("guest-total-scores")
let currentHomeScore = 0
let currentGuestScore = 0

// console.log(homeScoreEl)
// console.log(guestScoreEl)

function addOnePointHome(){
    currentHomeScore += 1
    homeScoreEl.textContent = currentHomeScore
}

function addTwoPointHome(){
    currentHomeScore += 2
    homeScoreEl.textContent = currentHomeScore
}

function addThreePointHome(){
    currentHomeScore += 3
    homeScoreEl.textContent = currentHomeScore
}

function addOnePointGuest(){
    currentGuestScore += 1
    guestScoreEl.textContent = currentGuestScore
}

function addTwoPointGuest(){
    currentGuestScore += 2
    guestScoreEl.textContent = currentGuestScore
}

function addThreePointGuest(){
    currentGuestScore += 3
    guestScoreEl.textContent = currentGuestScore
}

// if (currentHomeScore > currentGuestScore) {
//     document.getElementById("test").innerText = currentHomeScore 
// }

function resetScore() {
    currentGuestScore = 0
    currentHomeScore = 0
    guestScoreEl.textContent = currentGuestScore
    homeScoreEl.textContent = currentHomeScore
 }

 

