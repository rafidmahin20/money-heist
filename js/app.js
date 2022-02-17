// calculating income

const expanseAmountDiv = document.getElementById('totalExpanse'); 
const banalanceAmountDiv = document.getElementById('balance'); 
const savingAmountDiv = document.getElementById('savingAmount'); 
const remainingAmountDiv = document.getElementById('remainingBalance'); 

document.getElementById('Calculate').addEventListener('click', ()=>{
   const incomeValue = parseFloat(document.getElementById('incomeAmount').value);
   const foodValue = parseFloat(document.getElementById('foodAmount').value);
   const rentValue = parseFloat(document.getElementById('rentAmount').value);
   const clotheValue = parseFloat(document.getElementById('clotheAmount').value);
   
   const expansecalculate =foodValue + rentValue + clotheValue;
  console.log(expansecalculate, 'this is expanse value');

   const balanceCalculate = incomeValue - expansecalculate;
    console.log(balanceCalculate, 'this is balance');

    expanseAmountDiv.innerText = expansecalculate;
    banalanceAmountDiv.innerText = balanceCalculate;
})

document.getElementById('saveBtn').addEventListener('click', ()=>{
    const saveValue = parseFloat(document.getElementById('save').value);

    const expanseAmountValue = parseFloat(expanseAmountDiv.innerText);
    const balanceAmountValue = parseFloat(banalanceAmountDiv.innerText);

    const savingAmount = expanseAmountValue * (saveValue/100);
    
    console.log(savingAmount);

    const remainingBalanceAmount = balanceAmountValue - savingAmount;

    console.log(remainingBalanceAmount);
    savingAmountDiv.innerText = savingAmount;
    remainingAmountDiv.innerText = remainingBalanceAmount;
})