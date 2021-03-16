window.alert("Witamy!")

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });


let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let random_number = document.querySelector('.random_number');
let change_Mode = document.querySelector('.changeMode');

let count = 0;
let dark_mode = false;

updateDisplay();

change_Mode.addEventListener("click",()=>{
    if(dark_mode == false) 
    {
        dark_mode = true;
        counterDisplayElem.style.color = "white";
    }
    else
    {
        dark_mode = false;
        counterDisplayElem.style.color = "black";
    }
    document.body.classList.toggle("dark-mode");
});

random_number.addEventListener("click",()=>{
    var lucky_number = Math.floor(Math.random() * 100);
    window.alert("Gratulacje!\nTwoja szczęśliwa liczba to: "+lucky_number);
});



counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
    checkCount();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
    checkCount();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;  
};

function checkCount() {
if (count==3) {
    window.prompt("sporo")
} else if (count == -3) {
    window.prompt("mało")
}
}







