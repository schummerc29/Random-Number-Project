var userNumber, computerNumber, difference;

var elUser, elRandom, button, elResult, elDifference, elButton, boxOne, boxTwo, elRestart, stepOne, stepTwo, stepThree;
elUser = document.getElementById('choice');
elRandom = document.getElementById("number");
button = document.getElementById('generator');
elResult = document.getElementById('result');
elDifference = document.getElementById('final');
elButton = document.getElementById('show');
boxOne = document.getElementById('user');
boxTwo = document.getElementById('computer');
elRestart = document.getElementById('restart');
stepOne = document.getElementById('stepOne');
stepTwo = document.getElementById('stepTwo');
stepThree = document.getElementById('stepThree');


function generateRandomNumber() {
    computerNumber = Math.ceil(Math.random() * 100);
    elRandom.innerText = computerNumber;
    elDifference.innerText = '';

    stepTwo.removeAttribute('class');
    stepThree.setAttribute('class', 'current');

    elButton.setAttribute('class', 'ready');
}

function storeChoice() {
    userNumber = document.getElementById('choice').value;

    if (elResult.innerText > 100 || elResult.innerText < 0) {
        elResult.innerText = 'Please pick a value in the desired range!';
    } else {
        elResult.innerText = 'You choose the number ' + userNumber;
    }

    elDifference.innerText = '';

    stepOne.removeAttribute('class');
    stepTwo.setAttribute('class', 'current');
}

function findDifference() {
    if (!userNumber && !computerNumber) {
        elDifference.innerText = 'You still need a value from both you and the computer.';
        boxOne.setAttribute('class', 'alert');
        boxTwo.setAttribute('class', 'alert');
    } else if (!computerNumber) {
        elDifference.innerText = 'You still need a number from the computer.';
        boxOne.removeAttribute('class');
        boxTwo.setAttribute('class', 'alert');
    } else if (!userNumber) {
        elDifference.innerText = "You didn't pick a number yet.";
        boxOne.setAttribute('class', 'alert');
        boxTwo.removeAttribute('class');
    } else {
        boxOne.removeAttribute('class');
        boxTwo.removeAttribute('class');

        difference = userNumber - computerNumber;

        if (difference < 0) {
            elDifference.innerText = 'Your number is ' + Math.abs(difference) + ' lower than the computer number.';
        } else if (difference > 0) {
            elDifference.innerText = 'Your number is ' + Math.abs(difference) + ' greater than the computer number.';
        } else if (difference === 0) {
            elDifference.innerText = 'Both numbers are the exact same!';
        }

        elButton.removeAttribute('class');
        elRestart.setAttribute('class', 'ready');
    }

    stepThree.removeAttribute('class');
    stepOne.setAttribute('class', 'current');

}

function clearNumbers() {
    window.location.reload();
}

elUser.addEventListener('change', storeChoice, false);
button.addEventListener('click', generateRandomNumber, false);
elButton.addEventListener('click', findDifference, false);
elRestart.addEventListener('click', clearNumbers, false);