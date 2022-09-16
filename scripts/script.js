const boxes = document.querySelectorAll(".box")
const box1= document.querySelector("#b1")
const box2= document.querySelector("#b2")
const box3= document.querySelector("#b3")
const box4= document.querySelector("#b4")
const box5= document.querySelector("#b5")
const box6= document.querySelector("#b6")
const box7= document.querySelector("#b7")
const box8= document.querySelector("#b8")
const box9= document.querySelector("#b9")

let playerRed ={}
let playerYellow ={}
let currentPlayer = playerYellow

// winning options
// [1,2,3][4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        if(boxes[i].children.length==1){
            return
        }else{
            let img = document.createElement('img');
            if(currentPlayer==playerYellow){
                img.src = "assets/yellow.png";
                img.classList.add("images")
                boxes[i].appendChild(img);
                currentPlayer=playerRed 
            }else{
                img.src = "assets/red.png";
                img.classList.add("images")
                boxes[i].appendChild(img);
                currentPlayer=playerYellow
            }
        }
      
    })
}



