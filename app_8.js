// app_8


const boxs = document.querySelector('body section .container .boxs');
const box = document.querySelectorAll('body section .container .boxs .box');

const imagesBG = ['images/image_1.jpg','images/image_2.jpg','images/image_3.jpg']; 

for(let i =0;i<box.length;i++){
    Creat(i);
}   
function Creat(index){
    box[index].style.cssText = `background-image: url(${imagesBG[index]});background-size:cover;`;
}

const click_left = document.querySelector('body section a.chevron_left');
const click_right = document.querySelector('body section a.chevron_right');

let conteur = 0;
let conteur_Bar = 0;


click_right.addEventListener('click',function(){++conteur;++conteur_Bar;moveSlider();});
click_left.addEventListener('click',function(){--conteur;--conteur_Bar;moveSlider();});
    // function move slider
function moveSlider(){
    if(conteur_Bar >= box.length){conteur_Bar = 0;BarBG(conteur_Bar);}
    if(conteur_Bar < 0){conteur_Bar = box.length-1;BarBG(conteur_Bar);}
    
    if(conteur >= box.length){
        const newBoxs = document.querySelector('body section .container .boxs');
        boxs.appendChild(boxs.children[newBoxs.children.length - box.length].cloneNode(true));
        boxs.style.cssText = `transform:translateX(calc(-100% * ${conteur}));transition:transform .3s;`;
        BarBG(conteur_Bar);
    }
    else if(conteur >= 0 && conteur < box.length){
        boxs.style.cssText = `transform:translateX(calc(-100% * ${conteur}));transition:transform .3s;`;
        BarBG(conteur_Bar);
    }
    else if(conteur < 0){
        boxs.insertBefore(boxs.children[2].cloneNode(true),boxs.children[0]);
        boxs.style.cssText = `transform:translateX(calc(-100% * ${conteur=1}));transition:transform .0s;`;
        setTimeout(function(){
            boxs.style.cssText = `transform:translateX(calc(-100% * ${conteur=0}));transition:transform .5s;`;
        },50);
        BarBG(conteur_Bar);
    }
}

const bar = document.querySelectorAll('body section .bars .bar');
    //function bar background color 
function BarBG(index){
    switch(index){
        case 0:
                for(let i = 0;i<bar.length;i++){
                    if(index==i){
                        bar[i].style.cssText = `background-color:#fff;`;
                    }
                    else{bar[i].style.cssText = `background-color:rgb(0, 0, 0,.8);`;}
                }
            break;
        case 1:
            for(let i = 0;i<bar.length;i++){
                if(index==i){
                    bar[i].style.cssText = `background-color:#fff;`;
                }
                else{bar[i].style.cssText = `background-color:rgb(0, 0, 0,.8);`;}
            }
            break;
        case 2:
            for(let i = 0;i<bar.length;i++){
                if(index==i){
                    bar[i].style.cssText = `background-color:#fff;`;
                }
                else{bar[i].style.cssText = `background-color:rgb(0, 0, 0,.8);`;}
            }
            break;
    }
}
    //add event for bars
for(let i = 0;i<bar.length;i++){
    bar[i].addEventListener('click',function(){barMoveSlider(i);})
}
    //function bar Move slider
function barMoveSlider(index){
    if(index != conteur_Bar){
        if(boxs.children[0].classList.contains('active') == true){
            conteur= index;
            conteur_Bar = index;
            boxs.style.cssText = `transform:translateX(calc(-100% * ${index}));transition:transform .0s;`;
            BarBG(conteur_Bar);
        }
        else{
            for(let i = 0;i<box.length;i++){
                if(boxs.children[0].classList.contains('active') == true){
                    barMoveSlider(index);
                    break;
                }
                else{boxs.removeChild(boxs.children[0]);}
            }
        }
    }
};
    //function load => window 
window.onload = function(){
    const numRnd = Math.floor(Math.random() * 3);
    boxs.style.cssText = `transform:translateX(calc(-100% * ${numRnd}));transition:transform .0s;`;
    conteur = numRnd;
    conteur_Bar = numRnd;
    BarBG(numRnd);
}
const section = document.querySelector('body section');
let stop;
section.addEventListener('mouseout',function(){
    stop = setInterval(function(){
        conteur++;
        conteur_Bar++;
        moveSlider();
    },2000);
});
section.addEventListener('mouseover',function(){
    clearInterval(stop);
});