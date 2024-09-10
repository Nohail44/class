var array = [
    { 
        movie:"url('./one.jpg')",
        tittle:"Interrogation" 
    },
    { 
        movie:"url('./tow.jpg')",
        tittle:"Khel Khel Mein" 
    },
    { 
        movie:"url('./three.jpg')",
        tittle:"Vedaa" 
    },
    { 
        movie:"url('./four.jpg')",
        tittle:"Sarkate Ka Aatank" 
    },
    { 
        movie:"url('./five.jpg')",
        tittle:"Maharaj" 
    },
    { 
        movie:"url('./six.jpg')",
        tittle:"Ulajh" 
    },
    { 
        movie:"url('./saveen.jpg')",
        tittle:"Bloody Ishq" 
    },
    { 
        movie:"url('./hello.jpg')",
        tittle:"The Heist" 
    },
    { 
        movie:"url('./a.jpg')",
        tittle:"Bad Newz" 
    },
    { 
        movie:"url('./b.jpg')",
        tittle:"Kakuda" 
    },
]
var but = document.getElementById("but");
var num = -1;
var img = document.getElementById("img");
var text = document.getElementById("title");
but.addEventListener("click",function(){
   

    if(num==9){
num=0;
num++;
console.log(num);
img.style.background=array[num].movie;
text.innerHTML=array[num].tittle;
    }else{
        num++;
        console.log(num);
        img.style.background=array[num].movie;
        text.innerHTML=array[num].tittle;
    }



})
