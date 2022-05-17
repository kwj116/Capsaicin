const InFo = document.querySelector('#info');
const jicheon = document.querySelector('#jicheon');
const geon = document.querySelector('#geon');


function onMouse(event){
    event.target.style = 'opacity: 0.8;'
    event.target.style.width = "450px";
    event.target.style.height = "350px";
    event.target.style.transition = 'all 0.5s';
   
}

function MouseLeave(event){
    event.target.style = 'opacity: none';
    event.target.style.width = "400px";
    event.target.style.height = "300px";
    event.target.style.transition = 'all 0.5s';
}


InFo.addEventListener('mouseenter',onMouse);
InFo.addEventListener('mouseleave',MouseLeave);
jicheon.addEventListener('mouseenter',onMouse);
jicheon.addEventListener('mouseleave',MouseLeave);
geon.addEventListener('mouseenter',onMouse);
geon.addEventListener('mouseleave',MouseLeave);