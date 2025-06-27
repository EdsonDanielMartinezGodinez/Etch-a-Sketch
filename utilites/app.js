const container = document.querySelector(".hijo");
const input = document.getElementById("sizeInput");
const comands = document.querySelector(".comands");
const btn = document.getElementById("sizeButton");
const btn2 = document.getElementById("resetButton");
const btnColor = document.getElementById("color");
const randomColorButton = document.getElementById("random");
const darkButton = document.getElementById("darker");


const btn3 = document.createElement("button")

let totalsquared;
let squares;
let squaresCuad; 
let c = true;
let colorMod = "";




comands.appendChild(btn3);
btn3.id = "idBord";
btn3Style(btn3);


function btn3Style(e){
    e.textContent= "OFF!";
    e.style.border = "none"
    e.style.width = "100px";
    e.style.height = "50px";
    e.style.borderRadius = "5px";
    e.style.fontSize = "x-large";
    e.style.fontWeight= "bolder";
    e.style.backgroundColor = "hsl(0, 86%, 28%)";
    e.style.color = "white";
}


function btn3StyleGreen(e){
    e.textContent= "ON!";
    e.style.border = "none"
    e.style.width = "100px";
    e.style.height = "50px";
    e.style.borderRadius = "5px";
    e.style.fontSize = "x-large";
    e.style.fontWeight= "bolder";
    e.style.backgroundColor = "hsl(110, 86%, 28%)";
    e.style.color = "white";
}

function cambiarColor(e){
    switch(c){
        case true:
            if(e.type=="mouseover"){
                e.currentTarget.style.backgroundColor = 'hsl(0, 83%, 44%)';
            }else{
                e.currentTarget.style.backgroundColor = 'hsl(0, 86%, 28%)';
                e.currentTarget.style.transition = "background-color 0.5s";
            }
            break;
        case false:
            if(e.type=="mouseover"){
                e.currentTarget.style.backgroundColor = 'hsl(110, 84%, 41%)';
            }else{
                e.currentTarget.style.backgroundColor = 'hsl(110, 86%, 28%)';
                e.currentTarget.style.transition = "background-color 0.5s";
            }
            break;
    }

 }


function divMaker(e){
    container.innerHTML="";
    let div;
    for(let i=0; i < e; i++){
        div = document.createElement("div");
        div.id = "idDiv";
        div.classList.add("divClass");
        styleDiv(div);
        container.appendChild(div);
    }
};

function styleDiv(e){
    e.style.height = `${totalsquared}px`;
    e.style.width = `${totalsquared}px` ;
    e.style.border = "1px solid black"
}

function getArray(e){
     let arraySquared = [e,e];
     let arrayE = arraySquared[0] * arraySquared[1]; 
     return arrayE; 
}

function getTotalSquares(e){
    totalsquares = e;
    totalsquareds = 690 / totalsquares;
    return totalsquareds;
}


btn.addEventListener("click",() => {
    squares = input.value;  
    squaresCuad = getArray(squares);
    totalsquared = getTotalSquares(squares);
    if(squares <= 0 || squares > 100 ){
        alert("Invalid Number");
        input.value = "";
        return;
    }
    input.value = "";
    document.getElementById("sizeInput").focus();
    divMaker(squaresCuad);
});

container.addEventListener("mousedown", (e) =>{
    e.preventDefault();
    if(colorMod == "Manual"){
        if(e.target.classList.contains("divClass")){
            let inputValue = btnColor.value;
            let element = e.target;
            element.style.backgroundColor = inputValue;

        function muevete(e){
            element = e.target;
            element.style.backgroundColor = inputValue;
        }
        container.addEventListener("mousemove", muevete);

        container.addEventListener("mouseup",()=>{
        container.removeEventListener("mousemove", muevete);
        });

        container.addEventListener("mouseleave" ,() => {
        container.removeEventListener("mousemove", muevete);
        });
        }
    }else if(colorMod == "random"){
        if(e.target.classList.contains("divClass")){
            let element = e.target;
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            rgb = `rgb(${red},${blue},${green})`;
            element.style.backgroundColor = rgb;

            function muevete(e){
                let red = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                rgb = `rgb(${red},${blue},${green})`;
                element = e.target;
                element.style.backgroundColor = rgb;
            }
            container.addEventListener("mousemove", muevete);

            container.addEventListener("mouseup",()=>{
            container.removeEventListener("mousemove", muevete);
            });

            container.addEventListener("mouseleave" ,() => {
            container.removeEventListener("mousemove", muevete);
            });
        }
    }else if(colorMod == "dark"){
            if(e.target.classList.contains("divClass")){
            let element = e.target;
            let h = element.style.backgroundColor;
            let hClean = h.replace("(","").replace(")","").replace("rgb","").split(",");
            let rNumber = hClean[0];
            let gNumber = hClean[1];
            let bNumber = hClean[2];
            element.style.backgroundColor = `rgb(${0.95*rNumber},${0.95*gNumber},${0.95*bNumber})`; 
            function muevete(e){
                element = e.target;
                let h = element.style.backgroundColor;
                let hClean = h.replace("(","").replace(")","").replace("rgb","").split(",");
                let rNumber = hClean[0];
                let gNumber = hClean[1];
                let bNumber = hClean[2];
                element.style.backgroundColor = `rgb(${0.90*rNumber},${0.90*gNumber},${0.90*bNumber})`; 
            }
            container.addEventListener("mousemove", muevete);

            container.addEventListener("mouseup",()=>{
            container.removeEventListener("mousemove", muevete);
            });

            container.addEventListener("mouseleave" ,() => {
            container.removeEventListener("mousemove", muevete);
            });
        }
    }else{
        alert("You must choose a color first! Pick a color before painting and type a resolution in the input above.");
    }
});


btn3.addEventListener("click", () => {
    if( c == true){
        container.addEventListener("myCustomEvent", () => {
            const sons = container.querySelectorAll(":scope > .divClass");
            sons.forEach((e) =>{
                e.style.border = "none"
        })
        });
        const myEvent = new Event("myCustomEvent");
        container.dispatchEvent(myEvent);
        btn3StyleGreen(btn3);
        c = false;     
        return c;    
    }else if(c == false){
        container.addEventListener("myCustomEvent", () => {
            const sons = container.querySelectorAll(":scope > .divClass");
            sons.forEach((e) =>{
                e.style.border = "1px solid black"
        })
        });
        const myEvent = new Event("myCustomEvent");
        container.dispatchEvent(myEvent);
        btn3Style(btn3);
        c = true;     
        return c;
    }
});

btn3.addEventListener("mouseover", cambiarColor);
btn3.addEventListener("mouseout", cambiarColor);


btn2.addEventListener("click",()=> {
        container.addEventListener("myCustomE", () => {
            const sons = container.querySelectorAll(":scope > .divClass");
            sons.forEach((e) =>{
                e.style.backgroundColor = "";
            })
        });
        const myEvento = new Event("myCustomE");
        container.dispatchEvent(myEvento);
});


btnColor.addEventListener("click",() => {
    colorMod = "Manual";
    return colorMod;
})

randomColorButton.addEventListener("click",() =>{
    colorMod = "random";
    return colorMod;  
});

darkButton.addEventListener("click",() =>{
    colorMod = "dark";
    return colorMod;
})