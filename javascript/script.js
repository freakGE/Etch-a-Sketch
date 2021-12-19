
let backgroundColor = 'hsl(244, 19%, 17%)';
let penColor = '';
let boardColor = '#ffffff';
let btnColor = 'hsl(190, 99%, 42%)';


let items = document.querySelectorAll('.item');
let clear = document.querySelector('.clear');
let main = document.querySelector("#main");
let pColor = document.querySelector('.pColor');

let divInRow = 16;

let cWidth = 500;
let cHeight = 500;

let iWidth = cWidth / divInRow;
let iHeight = cHeight / divInRow;

let container = document.querySelector(".container");
container.style.width = `${cWidth}px`;
container.style.height = `${cHeight}px`;

let option = document.querySelector('option');
let size = document.querySelector('#size');


pColor.value = '#5a597354';
// bColor.value = "#ffffff";


pColor.addEventListener('input', (e) => {
  penColor = e.target.value;
});

penColor = pColor.value;

itemCounter = 0;
isClicked = false;

function colorChanger(){
    if(isClicked == false){
        this.style = `background-color: ${penColor}`
        this.style.width = `${(iWidth) - 2}px`;
        this.style.height = `${(iHeight) - 2}px`;
        isClicked = true;
    } else {
        this.style = `background-color: ${boardColor}`;
        this.style.width = `${(iWidth) - 2}px`;
        this.style.height = `${(iHeight) - 2}px`;
        isClicked = false;
    }
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

size.addEventListener('change', function() {
    console.log(this.value);
    if (this.value == 'small'){
        divInRow = 16;
    } else if (this.value == 'medium'){
        divInRow = 50;
    } else {
        divInRow = 100;
    }
    removeAllChildNodes(container);
    iWidth = cWidth / divInRow;
    iHeight = cHeight / divInRow;
    for (let i = 0; i < (divInRow * divInRow); i++){
        space(); 
    }
    

})


function space(){
    itemCounter++;
    let item = document.createElement('div');
    item.style.backgroundColor = boardColor;
    item.style.width = `${(iWidth) - 2}px`;
    item.style.height = `${(iHeight) - 2}px`;
    // item.style.border = '1px solid #9191912a';
    item.addEventListener('click', colorChanger);

    item.classList.add("item");    
    item.classList.add(`itemNumber${itemCounter}`);
    container.appendChild(item);
}

for (let i = 0; i < (divInRow * divInRow); i++){
    space(); 
}



clear.addEventListener('click', clearTable);

function clearTable(){
    items.forEach((item) => {
        item.style.backgroundColor = "rgb(255, 255, 255)";
    })
}


