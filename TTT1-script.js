/* Getting maximum score input */
 let max_score=prompt("ENTER MAXIMUM SCORE");
 const maximum=document.querySelector("#maxScore_set")
 const setMaximum = (maxIput) => {
     maximum.innerText=`MAX SCORE : ${maxIput}`;
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

        for(let val of boxId){
            Object.freeze(box)
        }
      
    })
});
