//variables
let input=document.querySelector('input');
let sizeDisplay=document.querySelector('.size');
let pillars=document.querySelector('.pillars')
//funtions
createDiv=(size)=>{
    let h=Math.floor(Math.random()*480) +20;
    let pillar=document.createElement('div');
    let width=Math.floor(window.innerWidth/size + 10);
    pillar.style.width=width+ 'px';
    pillar.style.height=h+'px';
    return pillar;
}
function createArray(size){
    pillars.innerHTML='';
    let s=size;
    while(s>0){
        pillars.appendChild(createDiv(size))
        --s;
    }
}
changeSize=(e)=>{
    let size=e.target.value;
    sizeDisplay.innerHTML=size;
    createArray(size);
}
//event listeners
input.addEventListener('input',changeSize);