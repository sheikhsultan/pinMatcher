/** pinGenerate section */
const pinInput = document.getElementById('generated-code');

function generate() { 
    const pinGenerate = ("" + Math.random()).substring(2, 6); 
    pinInput.value = pinGenerate;
}

/** 2nd attempt */ 
// document.getElementById('generate-btn').addEventListener('click', function () {
//     const pinInput = document.getElementById('generated-code');
//     const pinGenerate = ("" + Math.random()).substring(2, 6);
//     pinInput.value = pinGenerate;
// })

/** generateBTN 1'st attempt*/ 
// //  pinGenerate capture.
// const pinInputField = document.getElementById('generated-code');
// const pinGenerateBtn = document.getElementById('generate-btn');

// // pinGenerate event handler.
// pinGenerateBtn.addEventListener('click', function(){
//     const randomValue = Math.floor(Math.random() * 9000 + 1000);
//     pinInputField.value = randomValue;
// })
 

/** pinPad section */
const userInputSec = document.getElementById('user-input-sec');
document.getElementById('calc-body').addEventListener('click', function (element){
    const btn = element.target;
    if (btn.matches('.calcNumBtn') && userInputSec.value.length < 4) {
        userInputSec.value += btn.innerText;
    }
})

/** numPad all clear section */
function allClear() {
    userInputSec.value = '';
}

/** numPad backspace section */
function backspace() {
    const currentnum = userInputSec.value;
    if (currentnum > 0) {
        userInputSec.value = userInputSec.value.slice(0, -1);
    }
    else{
        alert('Number field is empty')
    }
   
}

/** submit section */

function submitBtn () {
    const rightCode = document.querySelector('.verified');
    const wrongCode = document.querySelector('.non-verified');
    const leftNumber = document.getElementById('attempt-left');

    let LeftCount = parseInt(leftNumber.innerText);
    let wrongCodeCount = 0;

    const numPadNum = userInputSec.value;
    const pinGenNums = pinInput.value;
    if (pinGenNums == '' && numPadNum == '') {
        alert('Please Generate Pin Number');
    }
    else if (numPadNum === pinGenNums) {
        rightCode.style.display = 'block';
        setTimeOut(rightCode);
    }
    else {
        wrongCodeCount += 1;
        wrongCode.style.display = 'block';
        setTimeOut(wrongCode);
        if (numPadNum !== pinGenNums && LeftCount > 1) {
            LeftCount--;
            leftNumber.innerText = LeftCount;
            console.log(LeftCount);
        }
        else {
            document.getElementsByClassName('.action-left').style.display = 'none';
            submitBtn.disabled = true;
        }
    }
    userInputSec.value = '';
    pinInput.value = '';
}


//  hide error or sucess message function
function setTimeOut(idName) {
    setTimeout(function () {
        idName.style.display = 'none';
    }, 3000);
}
