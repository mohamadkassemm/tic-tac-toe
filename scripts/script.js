const boxes = document.querySelectorAll(".box")
const box1 = document.querySelector("#mak")
let playerRed ={}
let playerYellow ={}
let currentPlayer = playerYellow

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
