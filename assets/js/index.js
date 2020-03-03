//add
const buttonAdd = document.querySelector("#add-solve");
const numAdd1 = document.querySelector("#add-a");
const numAdd2 = document.querySelector("#add-b");
const textAdd = document.querySelector("#add-result");

//subtract
const buttonSub = document.querySelector("#subtract-solve");
const numSub1 = document.querySelector("#subtract-a");
const numSub2 = document.querySelector("#subtract-b");
const textSub = document.querySelector("#subtract-result");

//multiple
const buttonMul = document.querySelector("#multiply-solve");
const numMul1 = document.querySelector("#multiply-a");
const numMul2 = document.querySelector("#multiply-b");
const textMul = document.querySelector("#multiply-result");

//divide
const buttonDiv = document.querySelector("#divide-solve");
const numDiv1 = document.querySelector("#divide-a");
const numDiv2 = document.querySelector("#divide-b");
const textDiv = document.querySelector("#divide-result");



//FUNCTION
//Add
function addNumber() {
    let countAdd1 = numAdd1.value;
    let countAdd2 = numAdd2.value;
    countAdd1 = parseInt(countAdd1, 10);
    countAdd2 = parseInt(countAdd2, 10);
    textAdd.value = countAdd1 + countAdd2;
}

buttonAdd.addEventListener("click", addNumber);


//Subtract
function subNumber() {
    let countSub1 = numSub1.value;
    let countSub2 = numSub2.value;
    countSub1 = parseInt(countSub1, 10);
    countSub2 = parseInt(countSub2, 10);
    textSub.value = countSub1 - countSub2;
}

buttonSub.addEventListener("click", subNumber);


//Multiple
function mulNumber() {
    let countMul1 = numMul1.value;
    let countMul2 = numMul2.value;
    countMul1 = parseInt(countMul1, 10);
    countMul2 = parseInt(countMul2, 10);
    textMul.value = countMul1 * countMul2;
}

buttonMul.addEventListener("click", mulNumber);


//Divide
function divNumber() {
    let countDiv1 = numDiv1.value;
    let countDiv2 = numDiv2.value;
    countDiv1 = parseInt(countDiv1, 10);
    countDiv2 = parseInt(countDiv2, 10);
    textDiv.value = countDiv1 / countDiv2;
}

buttonDiv.addEventListener("click", divNumber);
