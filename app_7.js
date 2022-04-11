// app_7

const boxs = document.querySelector('body section .container .boxs');
const box = document.querySelectorAll('body section .container .boxs .box');
const bar = document.querySelectorAll('body section .bars .bar');
const photos = ['images/photo_1.jpg','images/photo_2.jpg','images/photo_3.jpg','images/photo_4.jpg'];
const names = ['mohamed guenfoudi','amine guenfoudi','khalid guenfoudi','imad guenfoudi','abdellah guenfoudi','isam guenfoudi','ayoub guenfoudi','imran guenfoudi'];
const professions = ['Devloper','Desiner','Photographer','Artist','Teachers','Student'];

    //function create 
function create(index){
    box[index].style.setProperty('margin','0px 5px');
    box[index].firstElementChild.firstElementChild.src = photos[Math.floor(Math.random() * photos.length)];
    box[index].firstElementChild.firstElementChild.alt = photos[Math.floor(Math.random() * photos.length)];
    box[index].children[1].firstElementChild.textContent = names[Math.floor(Math.random() * names.length)]+` ${index+1}`;
    box[index].children[1].children[1].textContent = professions[Math.floor(Math.random() * professions.length)];
    const rndStar = Math.ceil(Math.random() * 5);
    for(let i = 0;i<rndStar;i++){box[index].children[1].children[2].children[i].style.cssText = `color:rgb(153, 34, 233);`;}
};
for(let i = 0;i<box.length;i++){
    create(i);
};

//  right && left 
const click_right = document.querySelector('body section .chevron_right');
const click_left = document.querySelector('body section .chevron_left');
let conteur = 0; 
let conteur_bar = 0; 
let conteur_index_bar = 0; 
const background_color = `background-color:rgb(153, 34, 233);border:1px solid #000;`;

click_right.addEventListener('click',function(){++conteur;++conteur_bar;++conteur_index_bar;moveSlider();});
click_left.addEventListener('click',function(){--conteur;--conteur_bar;--conteur_index_bar;moveSlider();});

    //function move slider
function moveSlider(){
    if(conteur_bar == box.length){conteur_bar=0;barBG(conteur_bar);}
    else if(conteur_bar == -1){conteur_bar=box.length-1;barBG(conteur_bar);};

    if(conteur <= box.length-3 && conteur >= 0){
        boxs.style.cssText = `transform:translate(calc(-300px * ${conteur})); `;
        barBG(conteur_bar);
    }
    if(conteur >= box.length-2){
        let newBoX = document.querySelectorAll('body section .container .boxs .box');
        let x = newBoX.length-9;
        boxs.append(boxs.children[x].cloneNode(true));
        boxs.style.cssText = `transform:translate(calc(-300px * ${conteur})); `;
        barBG(conteur_bar);
    }
    if(conteur < 0){    
        boxs.insertBefore(boxs.children[box.length-1].cloneNode(true),boxs.children[0]);   
        
        conteur = 1;
        boxs.style.cssText = `transition:transform 0s;transform:translate(calc(-300px * ${conteur}));`;
        //function moveback Slider
        function moveBack(conteur){
            boxs.style.cssText = `transform:translate(calc(-300px * ${conteur}));`;
        }
        setTimeout(function(){moveBack(--conteur);},50);    //setTimeout and callBack function()
        barBG(conteur_bar);
    }
}
    //function background color bars 
function barBG(index){
    switch(index){
        case 0:
        case 2:
        case 1:
            for(let i = 0;i<bar.length;i++){
                if(i == 0){bar[i].style.cssText = background_color;}
                else{bar[i].style.cssText = `background-color:#000;`;}
            }break;
        case 3:
        case 4:
        case 5:
            for(let i = 0;i<bar.length;i++){
                if(i == 1){bar[i].style.cssText = background_color;}
                else{bar[i].style.cssText = `background-color:#000;`;}
            }break;
        case 6:
        case 7:
        case 8:
            for(let i = 0;i<bar.length;i++){
                if(i == 2){bar[i].style.cssText = background_color;}
                else{bar[i].style.cssText = `background-color:#000;`;}
            }break;
    }
}

for(let i = 0;i<bar.length;i++){
    bar[i].addEventListener('click',function(){moveSliderIndex(i);});
};
    //function bars
function moveSliderIndex(index){
    const barConteurSlider = [0,3,6]; 
    const arrSlider = [0,-900,-1800]; // problem
    if(boxs.children[0].classList.contains('0') == false){
	    let con = 0;
	    for(let i = 0;i<boxs.children.length;i++){
	    	if(boxs.children[i].classList.contains('0') == false){
	    		con++;	
	    	}
	    	else{break;}
	    }
        if(index == barConteurSlider[0]){
            boxs.style.cssText = `transition:transform .0s;transform:translate(${con * -300}px);`;
        }
        setTimeout(function(){
            for(let i =0;i<con;i++){
                boxs.removeChild(boxs.children[0]);
            };
            boxs.style.cssText = `transition:transform .0s;transform:translate(${arrSlider[index]}px);`;
            barBG(barConteurSlider[index]);
	        conteur = barConteurSlider[index];
	        conteur_bar = barConteurSlider[index];
	        conteur_index_bar = barConteurSlider[index];
            con = 0;
        },50);
    }
    else if(boxs.children[0].classList.contains('0') == true){
        for(let i = 0;i<bar.length;i++){
            if(i==index){
                boxs.style.cssText = `transition:transform .0s;transform:translate(${arrSlider[index]}px);`; 
                bar[index].style.cssText = background_color;  
                conteur_bar = barConteurSlider[index];
                conteur = barConteurSlider[index];
                conteur_index_bar = barConteurSlider[index];
                barBG(conteur_bar);
            }
            else{bar[i].style.cssText = `background-color:#000;`;}
        }
    }
}
// window onload
window.onload = function(){moveSliderIndex(0);};