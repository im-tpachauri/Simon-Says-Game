// let gameseq=[];
// let userseq=[];
// let btns=["yellow","pink","green","purple"];
// let started=false;
// let level=0;
// let h2=document.querySelector('h2');


// document.addEventListener("keypress",function()
// {
//     if(started==false){
//         console.log("game is started");
//         started=true;

//         levelup();
//     }
// });


// function gamepress(btn)
// {
//     btn.classList.add("flash");
//     setTimeout(function()
// {
//     btn.classList.remove("flash");

// },150);
// }

// function userflash(btn)
// {
//     btn.classList.add("userflash");
//     setTimeout(function()
// {
//     btn.classList.remove("userflash");

// },150);
// }


// function levelup()
// {
//     userseq=[];
//     level++;
//     h2.innerText=`Level ${level}`; 
//     let randidx=Math.floor(Math.random() * 3);
//     let randcolor=btns[randidx];
//     let randbtn=document.querySelector(`.${randcolor}`);
//     gameseq.push(randcolor);
//     console.log(gameseq);
//     gamepress(randbtn);


// }
// function checkans(idx)
// {
//     if(userseq[idx]===gameseq[idx])
//     {
//         if(userseq.length==gameseq.length)
//         {
//            setTimeout(levelup,500);
//         }}
//     else{
//     h2.innerHTML=`Game over!! Your score is <b>${level}</b> <br> Press any key to restart.`;
//     document.querySelector("body").style.backgroundColor="red";
//     setTimeout(function()
// {
//     document.querySelector("body").style.backgroundColor="white";

// },150);
//     reset();
//     }
// }
// function btnpress()
// {
//     let btn=this;
//     userflash(btn);
//     usercolor=btn.getAttribute("id");
//     userseq.push(usercolor);
//     checkans(userseq.length-1);
// }
// let allbtns=document.querySelectorAll(".btn")
// for(btn of allbtns)
// {
//     btn.addEventListener("click",btnpress);
// }
// function reset(){
//     level=0;
//     started=false;
//     gameseq=[];
//     userseq=[];
// }
let gameseq = [];
let userseq = [];
let btns = ["yellow", "pink", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');

// Change the event listener to detect clicks on the body
document.addEventListener("click", function (event) {
    // Check if the clicked target is not a button
    if (started == false && !event.target.classList.contains("btn")) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gamepress(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4); // Change to 4 to include all colors
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gamepress(randbtn);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 500);
        }
    } else {
        h2.innerHTML = `Game over!! Your score is <b>${level}</b> <br> Press anywhere Except on colours to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    level = 0;
    started = false;
    gameseq = [];
    userseq = [];
}
