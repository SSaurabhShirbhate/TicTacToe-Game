console.log("Lets play Tic Tac Toe ")
let turn = "X"

//function tro channge turnr

const changeTurn = () =>{
    return turn === "X"?"0": "X"
}

//function to check for a win
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText)&&
        (boxtexts[e[2]].innerText=== boxtexts[e[1]].innerText ) && 
        (boxtexts[e[0]].innerText !=="")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won"
        }
    })
}

//main logic starts here
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn
            turn = changeTurn();
            //audioturnr.play()
            checkWin();
            document.getElementsByClassName(info)[0].innerText = "Turn For " + turn;
        }
    })
})


//add onclick liostener to reset button
var reset = document.querySelector("#info")
reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    document.getElementsByClassName(info)[0].innerText = "Turn For " + turn;

})