const button = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
button.addEventListener("click",funkcja);
button2.addEventListener("click",funkcja2);
button3.addEventListener("click",funkcja3);
const desc1 = document.getElementById("desc-1");
const desc2 = document.getElementById("desc-2");
const desc3 = document.getElementById("desc-3");
let licznik = 0;
let licznik2 = 0;
let licznik3 = 0;

function funkcja(){
    licznik++;
    licznik2 = 0;
    licznik3 = 0;
    if(licznik==0){
        console.log(licznik)
    }
    if(licznik==1){
        desc1.style.display = "block";
        button.style.transform = "rotate(45deg)"

        desc2.style.display = "none";
        button2.style.transform = "rotate(0deg)"

        desc3.style.display = "none";
        button3.style.transform = "rotate(0deg)"
        console.log(licznik)
    }
    if(licznik==2){
        licznik = 0;
        desc1.style.display = "none";
        button.style.transform = "rotate(0deg)"
        console.log(licznik)
    }
}

function funkcja2(){
    licznik2++;
    licznik = 0;
    licznik3 = 0;
    if(licznik2==0){
        console.log(licznik)
    }
    if(licznik2==1){
        desc2.style.display = "block";
        button2.style.transform = "rotate(45deg)"

        desc1.style.display = "none";
        button.style.transform = "rotate(0deg)"

        desc3.style.display = "none";
        button3.style.transform = "rotate(0deg)"

        console.log(licznik)
    }
    if(licznik2==2){
        licznik2 = 0;
        desc2.style.display = "none";
        button2.style.transform = "rotate(0deg)"
        console.log(licznik)
    }
}

function funkcja3(){
    licznik3++;
    licznik = 0;
    licznik2 = 0;
    if(licznik3==0){
        console.log(licznik)
    }
    if(licznik3==1){
        desc3.style.display = "block";
        button3.style.transform = "rotate(45deg)"

        desc1.style.display = "none";
        button.style.transform = "rotate(0deg)"

        desc2.style.display = "none";
        button2.style.transform = "rotate(0deg)"

        console.log(licznik)
    }
    if(licznik3==2){
        licznik3 = 0;
        desc3.style.display = "none";
        button3.style.transform = "rotate(0deg)"
        console.log(licznik)
    }
}
