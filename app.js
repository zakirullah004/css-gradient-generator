let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let deg = document.getElementById("deg")
let code = document.getElementById("code")
let copyCode = document.querySelector(".copyCode")
let body = document.body;
let currDeg = `0`;
let hex1 = "#9785af";
let hex2 = "#22db60";

let generateCode = () => {
    let hexColors = "0123456789abcdef";
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
        newColor +=  hexColors[Math.floor(Math.random() * 16)]      
    }
    // console.log(newColor);
    // changeColor(newColor)
    return newColor
}
let = handleBtn1 = () => {
    hex1 = generateCode()
    body.style.background = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    btn1.innerText = hex1;
    code.innerText = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    console.log(currDeg);
}
let = handleBtn2 = () => {
    console.log(currDeg);
    hex2 = generateCode()
    body.style.background = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    btn2.innerText = hex2;
    code.innerText = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
}
copyCode.addEventListener('click',()=>{
    navigator.clipboard.writeText(code.innerText);
    alert("code is copied\n"+code.innerText)
    // console.log(code.innerText);
})

let index = 0;
let changeDegree = () =>{
    let degrees = ['30', '90', '140', '180', '200', '250', '270', '300'];
    currDeg = degrees[index];
    deg.innerText = `${degrees[index]} deg`
    index++;
    code.innerText = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    body.style.background = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    
    if(index == degrees.length+1){
        currDeg = `0`
        deg.innerText = `${currDeg} deg`
        index = 0;
        code.innerText = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
        body.style.background = `linear-gradient(${currDeg}deg,${hex1},${hex2})`
    }
}


btn1.addEventListener('click',handleBtn1)
btn2.addEventListener('click',handleBtn2)
deg.addEventListener('click',changeDegree)