/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const full = document.getElementById('full');
const half = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');

let dayCounter = 0;
let rate = 35;

const dayList = [monday, tuesday, wednesday, thursday, friday];

function clearDays() {
    dayCounter = 0;
    rate = 35;
    for (let i = 0; i < dayList.length; i++) {
        dayList[i].classList.remove('clicked');
    }
    full.classList.remove('clicked');
    half.classList.add('clicked');
    calculatedCost.innerHTML = 0;
}

function changeRate() {
    if (rate === 35) {
        rate = 20;
        full.classList.remove('clicked');
        half.classList.add('clicked');
    } else {
        rate = 35;
        half.classList.remove('clicked');
        full.classList.add('clicked');
    }
    calculate();
}

function calculate() {
    calculatedCost.innerHTML = dayCounter * rate;
}

function selectDay(day) {
    if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        dayCounter++;
        calculate();
    }
}

for (let i = 0; i < dayList.length; i++) {
    dayList[i].addEventListener('click', function () {
        selectDay(dayList[i]);
    });
}

full.addEventListener('click', function () {
    changeRate();
});

half.addEventListener('click', function () {
    changeRate();
});

clearButton.addEventListener('click', function () {
    clearDays();
});
