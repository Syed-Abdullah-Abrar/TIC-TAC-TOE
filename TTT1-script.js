/* Getting maximum score input */
let max_score = prompt("ENTER MAXIMUM SCORE NUMBER");
const setMaximum = (maxInput) => {
  maximum = document.querySelector("#maxScore_set");
  if (!isNaN(maxInput) && maxInput != 0) {
    maximum.innerText = `MAX SCORE : ${maxInput}`;
  } else {
    maximum.innerText = `MAX SCORE : ${0}`;
    alert("ENTER VALID NON ZERO NUMBER...");
    max_score = Number(prompt("ENTER MAXIMUM SCORE NUMBER"));
    setMaximum(max_score);
  }
};
setMaximum(max_score);
/* Assigning letters to players*/
const letter = document.querySelectorAll(".letter_select");
const p1Letter = document.querySelector("#p1_letter");
const p2Letter = document.querySelector("#p2_letter");
let restart = document.querySelector(".restart");
let play_again = document.querySelector(".play_again");

function assingnment(letter) {
  letter[0].addEventListener("click", () => {
    p1Letter.innerText = letter[0].innerText;
    p2Letter.innerText = letter[1].innerText;
  });
  letter[1].addEventListener("click", () => {
    p1Letter.innerText = letter[1].innerText;
    p2Letter.innerText = letter[0].innerText;
  });
}

assingnment(letter);

/* acessing slots to play game*/
const parentBox = document.querySelectorAll(".game_box");
const slots = document.querySelectorAll(".slot");
let player1Score = document.querySelector(".p1score_no");
let player2Score = document.querySelector(".p2score_no");

play_again.addEventListener("click", () => {
  player1Score.innerText = 0;
  player2Score.innerText = 0;
});

/*Player 2 turn function*/

/*Check win*/
function winningCheck(id) {
  let winningCond = [
    ["X", "X", "X"],
    ["O", "O", "O"],
  ];

  let combo = [];
  combo[0] = [slots[0].innerHTML, slots[1].innerHTML, slots[2].innerHTML];
  combo[1] = [slots[6].innerHTML, slots[7].innerHTML, slots[8].innerHTML];
  combo[2] = [slots[0].innerHTML, slots[3].innerHTML, slots[6].innerHTML];
  combo[3] = [slots[1].innerHTML, slots[4].innerHTML, slots[7].innerHTML];
  combo[4] = [slots[2].innerHTML, slots[5].innerHTML, slots[8].innerHTML];
  combo[5] = [slots[0].innerHTML, slots[4].innerHTML, slots[8].innerHTML];
  combo[6] = [slots[3].innerHTML, slots[4].innerHTML, slots[5].innerHTML];
  combo[7] = [slots[2].innerHTML, slots[4].innerHTML, slots[6].innerHTML];
  console.log(combo);

{
    for (let i = 0; i < 8; i++) {
      if (combo[i].toString() === winningCond[0].toString()) {
        slots[id].innerText = p1Letter.innerText;
        slots[id-1].innerHTML.style.textde= "red";
        let r=1;
        const alertMsg = setTimeout(refresh,3000);
        function refresh(r) {
          alert(`Player ${r} wins`);
          for (let i = 0; i < 9; i++) {
            slots[i].innerText = "";
          }
        }
        for (let i = 0; i < 9; i++) {
          slots[i].innerText = "";
        }
        player1Score.innerText = Number(player1Score.innerText) + 1;
        break;
      } else if (combo[i].toString() === winningCond[1].toString()) {
        slots[id].innerText = p1Letter.innerText;
        let r=2;
        const alertMsg = setTimeout(refresh,3000);
        function refresh(r) {
          alert(`Player ${r} wins`);
          for (let i = 0; i < 9; i++) {
            slots[i].innerText = "";
          }
        }        
        for (let i = 0; i < 9; i++) {
          slots[i].innerText = "";
        }
        player2Score.innerText = Number(player2Score.innerText) + 1;
        break;
      }
    }
  }
} 
slots.forEach((box) => {
  box.addEventListener("click", () => {
    const boxId = box.getAttribute("id");
    console.log(`Box ${boxId} was clicked`);
    let actPlayer = p1Letter.innerText;
    if (actPlayer === p1Letter.innerText && box.innerText == "") {
      box.innerText = actPlayer;
      actPlayer = p2Letter.innerText;
    } else{
       {
        box.innerText = actPlayer;
        actPlayer = p1Letter.innerText;
      }
    }
    console.log(actPlayer);
    console.log(boxId);
    winningCheck(boxId);
    if (
      Number(player1Score.innerText) == max_score ||
      Number(player2Score.innerText) == max_score
    ) {
      alert("Game Over");
      player1Score.innerText = 0;
      player2Score.innerText = 0;
      max_score = Number(prompt("ENTER MAXIMUM SCORE NUMBER"));
      setMaximum(max_score);
    }
  });
});

