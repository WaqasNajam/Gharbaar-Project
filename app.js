
document.getElementById('heading-color').style.background = '#6184D8';

var bgcolors = ['#E86F3A', '#316EFF', '#6184D8'];

var i = 0;

function change(){  
    document.getElementById("heading-color").style.backgroundColor = bgcolors[i];
}

var bgcolhex = ['Lorem ipsum dolor sit', 'Lorem', 'Lorem ipsum dolor', ];

function changeText(){
    document.getElementById("heading-value").innerHTML = bgcolhex[i++];
    if(i == bgcolhex.length) i = 0;
}

const collapsableMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
}

collapsableMenu();

