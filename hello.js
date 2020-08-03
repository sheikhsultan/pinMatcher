
const pinInput = document.getElementById('generated-code');
function generateEventHandler() { 
    const pinGenerate = ("" + Math.random()).substring(2, 6); 
    pinInput.value = pinGenerate;
} 
/** 2nd attempt
document.getElementById('generate-btn').addEventListener('click', function () {
    const pinInput = document.getElementById('generated-code');
    const pinGenerate = ("" + Math.random()).substring(2, 6);
    pinInput.value = pinGenerate;
})
*/ 

/** generateBTN 1'st attempt
//  pinGenerate capture.
const pinInputField = document.getElementById('generated-code');
const pinGenerateBtn = document.getElementById('generate-btn');

// pinGenerate event handler.
pinGenerateBtn.addEventListener('click', function(){
    const randomValue = Math.floor(Math.random() * 9000 + 1000);
    pinInputField.value = randomValue;
})
*/  
