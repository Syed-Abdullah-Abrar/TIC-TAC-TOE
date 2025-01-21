/* Getting maximum score input */
 let max_score=(prompt("ENTER MAXIMUM SCORE NUMBER"))
 const setMaximum = (maxInput) => {
    maximum=document.querySelector("#maxScore_set")
    if(!isNaN(maxInput)&& maxInput!=0){
        maximum.innerText=`MAX SCORE : ${maxInput}`;
    }
    else{
        maximum.innerText=`MAX SCORE : ${0}`;
        alert("ENTER VALID NON ZERO NUMBER...")
        max_score=Number(prompt("ENTER MAXIMUM SCORE NUMBER"))
        setMaximum(max_score)
    }
 }
 setMaximum(max_score)
/* Assigning letters to players*/
const letter=document.querySelectorAll(".letter_select")
const p1Letter=document.querySelector("#p1_letter")
const p2Letter=document.querySelector("#p2_letter")

function assingnment(letter){
                letter[0].addEventListener("click" , () => {
                    p1Letter.innerText=letter[0].innerText
                    p2Letter.innerText=letter[1].innerText
                })
                letter[1].addEventListener("click" , () => {
                    p1Letter.innerText=letter[1].innerText
                    p2Letter.innerText=letter[0].innerText
                })
                
            }

 assingnment(letter)

/* acessing slots to play game*/
const slots=document.querySelectorAll(".slot");
let actPlayer = p1Letter.innerText

slots.forEach((box) => {
    box.addEventListener("click",()=>{
        const boxId= box.getAttribute("id");
        console.log(`Box ${boxId} was clicked`);
        if(actPlayer===p1Letter.innerText){
            actPlayer=p2Letter.innerText;
        }
        else{
            actPlayer=p1Letter.innerText
        }
        console.log(actPlayer);
        box.innerText=actPlayer;  
        if(box.boxId.contain(actPlayer))
            return;
    })

});