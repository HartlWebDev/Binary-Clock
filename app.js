const eleS1 = document.getElementById("s1");
const eleS2 = document.getElementById("s2");
const eleS4 = document.getElementById("s4");
const eleS8 = document.getElementById("s8");
const eleS16 = document.getElementById("s16")
const eleS32 = document.getElementById("s32")

const eleM1 = document.getElementById("m1");
const eleM2 = document.getElementById("m2");
const eleM4 = document.getElementById("m4");
const eleM8 = document.getElementById("m8");
const eleM16 = document.getElementById("m16")
const eleM32 = document.getElementById("m32")

const eleH1 = document.getElementById("h1");
const eleH2 = document.getElementById("h2");
const eleH4 = document.getElementById("h4");
const eleH8 = document.getElementById("h8");
const eleH16 = document.getElementById("h16")

let s1 = true;
let s2 = true;
let s4 = true;
let s8 = true;
let s16 = true;
let s32 = true;

let m1 = true;
let m2 = true;
let m4 = true;
let m8 = true;
let m16 = true;
let m32 = true;

let h1 = true;
let h2 = true;
let h4 = true;
let h8 = true;
let h16 = true;



let countS = 0
let countM = 0
let countH = 0

function sReset(){
    s1 = true;
    s2 = true;
    s4 = true;
    s8 = true;
    s16 = true;
    s32 = true;
}
function mReset(){
    m1 = true;
    m2 = true;
    m4 = true;
    m8 = true;
    m16 = true;
    m32 = true;
}
function hReset(){
    h1 = true;
    h2 = true;
    h4 = true;
    h8 = true;
    h16 = true;
}


function set() {
    // Set colors for s elements
    if (!s1) {
        eleS1.style.backgroundColor = "blue";
        eleS1.style.color = "blue"; // Set text color to blue for s1
    } else {
        eleS1.style.backgroundColor = "gray";
        eleS1.style.color = "gray"; // Set text color to gray for s1
    }

    if (!s2) {
        eleS2.style.backgroundColor = "blue";
        eleS2.style.color = "blue"; // Set text color to blue for s2
    } else {
        eleS2.style.backgroundColor = "gray";
        eleS2.style.color = "gray"; // Set text color to gray for s2
    }

    if (!s4) {
        eleS4.style.backgroundColor = "blue";
        eleS4.style.color = "blue"; // Set text color to blue for s4
    } else {
        eleS4.style.backgroundColor = "gray";
        eleS4.style.color = "gray"; // Set text color to gray for s4
    }

    if (!s8) {
        eleS8.style.backgroundColor = "blue";
        eleS8.style.color = "blue"; // Set text color to blue for s8
    } else {
        eleS8.style.backgroundColor = "gray";
        eleS8.style.color = "gray"; // Set text color to gray for s8
    }

    if (!s16) {
        eleS16.style.backgroundColor = "blue";
        eleS16.style.color = "blue"; // Set text color to blue for s16
    } else {
        eleS16.style.backgroundColor = "gray";
        eleS16.style.color = "gray"; // Set text color to gray for s16
    }

    if (!s32) {
        eleS32.style.backgroundColor = "blue";
        eleS32.style.color = "blue"; // Set text color to blue for s32
    } else {
        eleS32.style.backgroundColor = "gray";
        eleS32.style.color = "gray"; // Set text color to gray for s32
    }

    // Set colors for m elements
    if (!m1) {
        eleM1.style.backgroundColor = "blue";
        eleM1.style.color = "blue"; // Set text color to blue for m1
    } else {
        eleM1.style.backgroundColor = "gray";
        eleM1.style.color = "gray"; // Set text color to gray for m1
    }

    if (!m2) {
        eleM2.style.backgroundColor = "blue";
        eleM2.style.color = "blue"; // Set text color to blue for m2
    } else {
        eleM2.style.backgroundColor = "gray";
        eleM2.style.color = "gray"; // Set text color to gray for m2
    }

    if (!m4) {
        eleM4.style.backgroundColor = "blue";
        eleM4.style.color = "blue"; // Set text color to blue for m4
    } else {
        eleM4.style.backgroundColor = "gray";
        eleM4.style.color = "gray"; // Set text color to gray for m4
    }

    if (!m8) {
        eleM8.style.backgroundColor = "blue";
        eleM8.style.color = "blue"; // Set text color to blue for m8
    } else {
        eleM8.style.backgroundColor = "gray";
        eleM8.style.color = "gray"; // Set text color to gray for m8
    }

    if (!m16) {
        eleM16.style.backgroundColor = "blue";
        eleM16.style.color = "blue"; // Set text color to blue for m16
    } else {
        eleM16.style.backgroundColor = "gray";
        eleM16.style.color = "gray"; // Set text color to gray for m16
    }

    if (!m32) {
        eleM32.style.backgroundColor = "blue";
        eleM32.style.color = "blue"; // Set text color to blue for m32
    } else {
        eleM32.style.backgroundColor = "gray";
        eleM32.style.color = "gray"; // Set text color to gray for m32
    }

    // Set colors for h elements (unchanged from previous version)
    if (!h1) {
        eleH1.style.backgroundColor = "blue";
        eleH1.style.color = "blue"; // Set text color to blue for h1
    } else {
        eleH1.style.backgroundColor = "gray";
        eleH1.style.color = "gray"; // Set text color to gray for h1
    }

    if (!h2) {
        eleH2.style.backgroundColor = "blue";
        eleH2.style.color = "blue"; // Set text color to blue for h2
    } else {
        eleH2.style.backgroundColor = "gray";
        eleH2.style.color = "gray"; // Set text color to gray for h2
    }

    if (!h4) {
        eleH4.style.backgroundColor = "blue";
        eleH4.style.color = "blue"; // Set text color to blue for h4
    } else {
        eleH4.style.backgroundColor = "gray";
        eleH4.style.color = "gray"; // Set text color to gray for h4
    }

    if (!h8) {
        eleH8.style.backgroundColor = "blue";
        eleH8.style.color = "blue"; // Set text color to blue for h8
    } else {
        eleH8.style.backgroundColor = "gray";
        eleH8.style.color = "gray"; // Set text color to gray for h8
    }

    if (!h16) {
        eleH16.style.backgroundColor = "blue";
        eleH16.style.color = "blue"; // Set text color to blue for h16
    } else {
        eleH16.style.backgroundColor = "gray";
        eleH16.style.color = "gray"; // Set text color to gray for h16
    }
}

function CountS(){
    document.getElementById("countS").innerHTML = countS%60 +" Sekunden"

}
function CountM(){
    document.getElementById("countM").innerHTML = countM%60 +" Minuten"

}
function CountH(){
    document.getElementById("countH").innerHTML = countH%24 +" Stunden"
}

function oneUpS(){

    s1=!s1
    if(s1){
        s2=!s2
        if(s2){
            s4=!s4
            if(s4){
                s8=!s8
                if(s8){
                    s16=!s16
                    if(s16){
                        s32=!s32
                    }
                }
            }
        }
    }


set();
countS++
CountS();
}

function oneUpM(){

    m1=!m1
    if(m1){
        m2=!m2
        if(m2){
            m4=!m4
            if(m4){
                m8=!m8
                if(m8){
                    m16=!m16
                    if(m16){
                        m32=!m32
                    }
                }
            }
        }
    }

    set();
    countM++
    CountM();
}

function oneUpH(){

    h1=!h1
    if(h1){
        h2=!h2
        if(h2){
            h4=!h4
            if(h4){
                h8=!h8
                if(h8){
                    h16=!h16
                }
            }
        }
    }

    set();
    countH++
    CountH();
}

function inc(){
oneUpS()
if(!s32 && !s16 && !s8 && !s4){
    sReset()
    oneUpM()
    if(!m32 && !m16 && !m8 && !m4){
        mReset()
        oneUpH()   
    }
}

}


let lol = document.getElementById("numper")

function countNow(number) {
    if(number == 0){
        number = 60;
    }

    for (let i = 0; i < number; i++) {
        setTimeout(inc, i * 1)
    }
}
    let on = false
function show(){
    if(!on){
eleS1.style.color = "black";
eleS2.style.color = "black";
eleS4.style.color = "black";
eleS8.style.color = "black";
eleS16.style.color = "black";
eleS32.style.color = "black";

eleM1.style.color = "black";
eleM2.style.color = "black";
eleM4.style.color = "black";
eleM8.style.color = "black";
eleM16.style.color = "black";
eleM32.style.color = "black";

eleH1.style.color = "black";
eleH2.style.color = "black";
eleH4.style.color = "black";
eleH8.style.color = "black";
eleH16.style.color = "black";
on = !on
document.getElementById("shower").innerHTML = "Hide Numbers"
    } else {
    
        eleS1.style.color = "gray";
        eleS2.style.color = "gray";
        eleS4.style.color = "gray";
        eleS8.style.color = "gray";
        eleS16.style.color = "gray";
        eleS32.style.color = "gray";
        
        eleM1.style.color = "gray";
        eleM2.style.color = "gray";
        eleM4.style.color = "gray";
        eleM8.style.color = "gray";
        eleM16.style.color = "gray";
        eleM32.style.color = "gray";
        
        eleH1.style.color = "gray";
        eleH2.style.color = "gray";
        eleH4.style.color = "gray";
        eleH8.style.color = "gray";
        eleH16.style.color = "gray";
        on = !on
        set()
        document.getElementById("shower").innerHTML = "Show Numbers"
            } 
            
}