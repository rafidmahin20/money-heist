// calculating the total expanse

// const calculation = document.getElementById('Calculate');

// calculation.addEventListener('click', function totalCalculation(){
//     const food = document.getElementById('foodAmount');
//     const rent = document.getElementById('rentAmount');
//     const cloth = document.getElementById('clotheAmount');
//     const income = document.getElementById('incomeAmount');
//     const incomeText = income.value;
//     const previousIncome = parseFloat(incomeText);


//     // total expanse
//     const totalCost = +food.value + +rent.value + +cloth.value;
//     const totalExpanse = document.getElementById('totalExpanse');
//     const totalExpanseText = totalExpanse.innerText;
//     totalExpanse.innerText = totalCost;
    

//     // balance
//     const totalAmount = previousIncome - totalCost;
//     const totalBalance = document.getElementById('balance');
//     const totalBalanceText = totalBalance.innerText;
//     totalBalance.innerText = totalAmount;

//     // reset value
//     // food.value = '';
//     // rent.value = '';
//     // cloth.value = '';

//     console.log(totalBalanceText);
// })
// // saving operation
// const saveButton = document.getElementById('saveBtn');

// saveButton.addEventListener('click', function savingOp(){
//     const save = document.getElementById('save');
//     const saveText = save.value;
//     const previousSave = parseFloat(saveText);


//     // const savePercentage = (previousSave / 100)*
//     const newPercent = (previousSave*0.2)
//     const saveAmount = document.getElementById('savingAmount');
//     saveAmount.innerText = newPercent;
//     const newBalance = document.getElementById('balance');
//     const newBalanceNumber = parseFloat(newBalance.innerText);
//     const remainingBalance = document.getElementById('remainingBalance');
//     remainingBalanceNumber.innerText = newBalanceNumber + newPercent;

//     console.log(remainingBalance);
// })

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