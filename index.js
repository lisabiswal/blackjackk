// let first=random()
// let second=random()
let cards=[]
let sum=0
let isAlive=true
let BlackJack=false
let messEl=document.getElementById("mess")
let cardEl=document.getElementById("card")
let sumEl=document.getElementById("sum")
function random(){
    return Math.floor(Math.random()*13)+1
}
function startel(){
    isAlive=true
    let first=random()
    let second=random()
    cards = [first, second]
    sum = first + second
    continuee()
}
function continuee(){

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if(sum===21){
        messEl.innerText= "Woohoo!, it's a BlackJack!!"
        BlackJack=true

    }
    else if(sum<21){
        messEl.innerText= "Wanna draw another card?"
        isAlive=true
    }
    else{
        messEl.innerText= "You got out of the game"
        isAlive=false
    }
}
function newel(){
    if(isAlive===true && BlackJack===false){
   let card=random()
   sum+=card
   cards.push(card)
    }
   continuee()
    
}

