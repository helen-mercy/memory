var score=0;
var cards=[
    "A","E","B" ,"H","K","R","T","X","Y","Z"
]
var cardSet;
var board=[];
var rows=4;
var columns=5;
var card1Select;
var card2Select;

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
            card.src= "images/"+cardImage+".jpg";
            card.classList.add("card");
              card.addEventListener("click", select);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
   setTimeout(hideCards,2000);
}
function hideCards(){
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let card=document.getElementById(r.toString()+"-"+c.toString());
            card.src="fairy.jpg";
        }
    }
}
function select(){
    if (this.src.includes("fairy")){
        if(!card1Select){
            card1Select=this;
            let coords=card1Select.id.split("-");
            let r=parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Select.src= "images/"+board[r][c]+".jpg"
        }
        else if(!card2Select&&this!=card1Select){
            card2Select=this;
            let coords=card2Select.id.split("-");
            let r=parseInt(coords[0]);
            let c=parseInt(coords[1]);

            card2Select.src="images/"+board[r][c] + ".jpg";
            setTimeout(update,1000);
        }
    }
}
function update(){
    if(card1Select.src!=card2Select.src){
        card1Select.src="fairy.jpg";
        card2Select.src="fairy.jpg";
        
    }
    else{
        score+=1;
        document.getElementById("score").innerText=score;
    }
    card1Select=null;
    card2Select=null;
}