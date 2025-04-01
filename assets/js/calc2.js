let calculation = JSON.parse(localStorage.getItem('calc'))||'';


function addString(value){
    
    calculation += value;
    localStorage.setItem('calc',JSON.stringify(calculation));
    resultOnPage();
    
}
function clearCalculation(){
    
calculation ='';
localStorage.setItem('calc',JSON.stringify(calculation));

   resultOnPage();
}

function convertStringToMath(){

 calculation = eval(calculation);
 localStorage.setItem('calc',JSON.stringify(calculation));

     resultOnPage();
}
  function resultOnPage(){
const resultElement = document.querySelector('.js-result').innerHTML = calculation;
  }
 
    resultOnPage();