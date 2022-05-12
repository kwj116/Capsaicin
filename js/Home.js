const InFo = document.querySelector('#info');
const jicheon = document.querySelector('#jicheon');
const geon = document.querySelector('#geon');

console.log(InFo)

function onMouse(event){
    event.target.style.width = "560px";
    event.target.style.height = "380px";
    event.target.style.transition = 'all 0.5s';
}

function MouseLeave(event){
    event.target.style.width = "530px";
    event.target.style.height = "350px";
    event.target.style.transition = 'all 0.5s';
}


InFo.addEventListener('mouseenter',onMouse);
InFo.addEventListener('mouseleave',MouseLeave);
jicheon.addEventListener('mouseenter',onMouse);
jicheon.addEventListener('mouseleave',MouseLeave);
geon.addEventListener('mouseenter',onMouse);
geon.addEventListener('mouseleave',MouseLeave);s