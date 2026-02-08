let boxes = document.querySelectorAll(".box"); // access boxes

let rstbtn = document.querySelector("#btn"); //access reset wala btn
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const showWinner = (winner) =>{
msg.innerText = `congu ,Winner is ${winner}`;
msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(let Pattern of winPattern) {
        
        let pos1 = boxes[Pattern[0]].innerText;
        let pos2 = boxes[Pattern[1]].innerText;
        let pos3 = boxes[Pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3 ){
            console.log (`winner is ${pos1}`);
            showWinner(pos1);
           for(let box of boxes){
            box.disabledm = true;
           }
            
        }
    }
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(box.innerText === ""){
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    }
    })
})