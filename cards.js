var score=0;
var cards=[
    "A","E","F" ,"H","K","R","T","X","Y","Z"
]
var cardSet;
var board=[];
var rows=4;
var columns=5;

window.onload=function(){
    shuffleCards();
    startGame();
}
function shuffleCards() {
    cardSet=cards.concat(cards);
    console.log(cardSet);
    for(let i=0;i<cardSet.length;i++){
        let j=Math.floor(Math.random()*cardSet.length);
        let temp=cardSet[i];
        cardSet[i]=cardSet[j];
        cardSet[j]=temp;
    }
    console.log(cardSet);
}
function startGame(){
    for(let r=0;r<rows;r++){
        let row=[];
        for(let c=0;c<columns;c++){
            let cardImage =cardSet.pop();
            row.push(cardImage);

            let card=document.createElement("img");
            card.id=r.toString()+"-"+c.toString();
            card.src= "images/"+cardImage+".png";
            card.classList.add("card");
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
   setTimeout(hideCards,1000);
}
function hideCards(){
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let card=document.getElementById(r.toString()+"-"+c.toString());
            card.src="fairy.jpg";
        }
    }
}
