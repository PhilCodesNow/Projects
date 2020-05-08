

///////// sets counter to 0 and user input to 0
let currentCount = 0;
///////// sets result shower to counter
result = document.getElementById('result');
result.innerHTML = `${currentCount}`;

//////// sets input to 1 on load
document.getElementById('inputForm').value = '1';




// input = document.getElementById('inputForm');
// input.value = userInput;
// console.log(userInput);


const inputSubtract=()=>{
    input = document.getElementById('inputForm');
    input.value = input.value - 1;
}
const inputAdd = () =>{
    input = document.getElementById('inputForm');
    number = parseInt(input.value);
    input.value = number + 1;
}


////// makes add button add from counter and display to result <p>
const add = () =>{
    input = document.getElementById('inputForm').value;
    userNum = parseInt(input);
    input.removeChild;
    currentCount = currentCount + userNum;
    result = document.getElementById('result');
    result.removeChild;
    result.innerHTML = `${currentCount}`;
    ////// sets color to black or red if pos or neg
    if(currentCount > -1){
        document.getElementById('result').style.color = 'black';
    }
}

////// makes subtract button subtract  from counter and display to result <p>
const subtract = () =>{
    input = document.getElementById('inputForm').value;
    userNum = parseInt(input);
    input.removeChild;
    currentCount = currentCount - userNum;
    result = document.getElementById('result');
    result.removeChild;
    result.innerHTML = `${currentCount}`;
    ///// sets color to black or red if pos or neg
    if(currentCount < 0){
        document.getElementById('result').style.color = 'red';
    }
}


