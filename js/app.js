// calculating the total expanse

const calculation = document.getElementById('Calculate');

calculation.addEventListener('click', function totalCalculation(){
    const food = document.getElementById('foodAmount');
    const rent = document.getElementById('rentAmount');
    const cloth = document.getElementById('clotheAmount');
    const income = document.getElementById('incomeAmount');
    const incomeText = income.innerText;
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
    food.value = '';
    rent.value = '';
    cloth.value = '';

    console.log(totalBalanceText);
})