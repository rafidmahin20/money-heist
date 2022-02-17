// calculating the total expanse

const incomeInput = document.getElementById('incomeAmount');
const foodInput = document.getElementById('foodAmount');
const rentInput = document.getElementById('rentAmount');
const clothInput = document.getElementById('clotheAmount');

// buttons
const calculateBtn = document.getElementById('Calculate');

// results

const totalExpanseInput = document.getElementById('totalExpanse');

function calculateTotalExpanse(){
    let food = Number(foodInput.value);
    let rent = Number(rentInput.value);
    let clothes = Number(clothInput.value);
    
    const totalExp = food + rent + clothes;

    totalExpanseInput.textContent = totalExp.toFixed(2);
    
}

function handleEvent(){
    if(Number(foodInput.value) && Number(rentInput.value) && Number(clothInput.value)){
        calculateTotalExpanse()
    }
    else{
        alert('Give a valid value and try again');
    }
}

calculateBtn.addEventListener('click', handleEvent);
