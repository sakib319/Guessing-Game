const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body")
const guessingNumber=form.querySelector("#guessingNumber")
const checkButton=form.querySelector("#check")


const resultText=cardBody.querySelector(".resultText")
const remainingAttempts=cardBody.querySelector(".remainingAttempts");

pTag=document.createElement("p");


let totalWon=0;
let totalLost=0;
let remainingAttempt=5; 






form.addEventListener("submit",(event)=>{
 event.preventDefault();

checkResult(guessingNumber.value);
remainingAttempt--;
remainingAttempts.innerHTML=`You have remaining attempt ${remainingAttempt}`;

 if (remainingAttempt ==0){
   
   
   checkButton.setAttribute("disabled",true);
   guessingNumber.setAttribute("disabled",true);
 }

 
 
  
 
 guessingNumber.value="";
 
})



function checkResult(guessingValue){
  // Tab to edit
  
  let getRandomNumber=getRandom(5);
  if(guessingValue==getRandomNumber){
    resultText.innerHTML="You have won";
    totalWon++;
  }else{
    resultText.innerHTML=`You Have Lost .The Random was ${getRandomNumber}`
    totalLost++;
  }
  
pTag.innerHTML=`Won:${totalWon},Lost:${totalLost}`;
 pTag.classList.add("large-icon")
 cardBody.appendChild(pTag);
  
 }

function getRandom(limit){
  let random=Math.floor(Math.random()*limit)+1;
  return random;
  
}

