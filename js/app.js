// calculating the total expanse

const calculation = document.getElementById('Calculate');

calculation.addEventListener('click', function totalCalculation(){
    const food = document.getElementById('foodAmount');
    const rent = document.getElementById('rentAmount');
    const cloth = document.getElementById('clotheAmount');
    const income = document.getElementById('incomeAmount');
    const incomeText = income.value;
    const previousIncome = parseFloat(incomeText);


    // total expanse
    const totalCost = +food.value + +rent.value + +cloth.value;
    const totalExpanse = document.getElementById('totalExpanse');
    const totalExpanseText = totalExpanse.innerText;
    totalExpanse.innerText = totalCost;
    

    // balance
    const totalAmount = previousIncome - totalCost;
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = totalAmount;

    // reset value
    // food.value = '';
    // rent.value = '';
    // cloth.value = '';

    console.log(totalBalanceText);
})
// saving operation
const saveButton = document.getElementById('saveBtn');

saveButton.addEventListener('click', function savingOp(){
    const save = document.getElementById('save');
    const saveText = save.value;
    const previousSave = parseFloat(saveText);


    // const savePercentage = (previousSave / 100)*
    const newPercent = (previousSave*0.2)
    const saveAmount = document.getElementById('savingAmount');
    saveAmount.innerText = newPercent;
    const newBalance = document.getElementById('balance');
    const newBalanceNumber = parseFloat(newBalance.innerText);
    const remainingBalance = document.getElementById('remainingBalance');
    remainingBalanceNumber.innerText = newBalanceNumber + newPercent;

    console.log(remainingBalance);
})