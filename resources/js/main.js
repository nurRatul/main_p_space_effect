/*-- NEVIGATION --*/
var nev = document.getElementById('nev');
var width= window.outerWidth;


if(width >= 595){
   window.addEventListener("scroll",function(){
    let offsetY= window.pageYOffset;
    if(offsetY >= 58){
        nev.style.position= 'sticky';
        nev.style.top= '0';
    }else{
        nev.style.position= 'absolute';
        nev.style.top= '50px';
    }
})
}else if(width < 595){
    window.addEventListener("scroll",function(){
    let offsetY= window.pageYOffset;
        nev.style.position= 'grid';
    })
}



/*-- INF_1 --*/

var inf_1= document.getElementById('inf_1');
var more_1= document.getElementById('more_1');
var less_1= document.getElementById('less_1');

var inf_2= document.getElementById('inf_2');
var more_2= document.getElementById('more_2');
var less_2= document.getElementById('less_2');

inf_1.addEventListener("click", function(){
    inf_1.style.display="none";
    more_1.style.display= "block";
    less_1.style.display= "block";
})
less_1.addEventListener("click", function(){
    inf_1.style.display="block";
    more_1.style.display= "none";
    less_1.style.display= "none";
})

//inf_2

inf_2.addEventListener("click", function(){
    inf_2.style.display="none";
    more_2.style.display= "block";
    less_2.style.display= "block";
})
less_2.addEventListener("click", function(){
    inf_2.style.display="block";
    more_2.style.display= "none";
    less_2.style.display= "none";
})
