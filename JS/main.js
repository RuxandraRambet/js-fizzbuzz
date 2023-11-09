'use strict';

const listElement = document.getElementById('square-list');

for (let i = 1; i <= 100; i++) {
    let squareElement = document.createElement('li');

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        squareElement.append('fizzbuzz');
        // Oppure
        // squareElement.innerHTML = 'fizzbuzz';
        // Oppure
        // squareElement.innerText = 'fizzbuzz';

        squareElement.classList.add('square-fizzbuzz');
    }else if (i % 3 === 0) {
        console.log('fizz');
        squareElement.append('fizz');
        squareElement.classList.add('square-fizz');
    }else if (i % 5 === 0) {
        console.log('buzz');
        squareElement.append('buzz');
        squareElement.classList.add('square-buzz');
    }else {
        console.log(i);
        squareElement.append(i);
        squareElement.classList.add('square-number');
    }

    listElement.append(squareElement);
}