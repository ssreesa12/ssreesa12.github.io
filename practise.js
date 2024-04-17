let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#rst-Btn");
let turn0 = true;//pX,po
let newbtn= document.querySelector(".newbtn")
let para= document.querySelector("#winner")
let msgcontainer=document.querySelector(".msg-container")
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0 = true
    anabledBoxes()
    msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         if( turn0){
            box.innerText="O"
            turn0=false;
         }else{
            box.innerText="X";
            turn0=true;
         }
         box.disabled=true

         checkWinner()

          
    });
});
const anabledBoxes=()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText= " ";
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const showWinner=(winner)=>{
    para.innerText=`Congratulation🥳🥳🥳 "${winner}" you are the winner `
    msgcontainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner=()=>{
    for(pattern of winpatterns ){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
       
        let pos1= boxes[pattern[0]].innerText
        let pos2= boxes[pattern[1]].innerText
        let pos3= boxes[pattern[2]].innerText
       
        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                console.log("winner",pos1)
                
                showWinner(pos1)
            }
        }
    }
}
newbtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
