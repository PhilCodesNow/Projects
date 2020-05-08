

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





////// makes add button add from counter and display to result <p>
const add = () =>{
    input = document.getElementById('inputForm').value;
    userNum = parseInt(input);
    input.removeChild;
    currentCount = currentCount + userNum;
    result = document.getElementById('result');
    result.removeChild;
    result.innerHTML = `${currentCount}`;
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
    if(currentCount < 0){
        document.getElementById('result').style.color = 'red';
    }
}


