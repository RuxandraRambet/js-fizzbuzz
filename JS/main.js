'use strict';

const listElement = document.getElementById('square-list');

for (let i = 1; i <= 100; i++) {
    let squareElement = document.createElement('li');

    if (i % 3 === 0 && 5 === 0) {
        console.log('fizzbuzz');
    }else if (i % 3 === 0) {
        console.log('fizz');
    }else if (i % 5 === 0) {
        console.log('buzz');
    }else {
        console.log(i);
    }
}