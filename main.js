var numberContainer = document.querySelector('#number-container');
var numbers = document.querySelectorAll('.numbers');
var selectedNumbers = [];
var counter = 1;
var btn = document.querySelector('#draw');
var scores = document.querySelector('#scores');
var arrayScores = [];
var finalScore = document.querySelector('#check-numbers');
var arrayFinalScore = [];
var bool = true;
var bool2 = true;
var random;
var arrayLength6 = false;
var again = document.querySelector('#again');
var againSameNumbers = document.querySelector('#againSameNumbers');
var intId;

window.addEventListener('DOMContentLoaded', createNumbers);

numberContainer.addEventListener('click', function (e) {
    clickNumber(e);
});

again.addEventListener('click', playAgain);
againSameNumbers.addEventListener('click', playAgainSameNumbers);

btn.addEventListener('click', function () {
    if (selectedNumbers.length === 6) {
        arrayLength6 = true;
        intId = setInterval(drawingNumbers, 1000);
    } else if (selectedNumbers.length < 6) {
        alert("Najpierw wybierz 6 liczb!")
    }
});

// TWORZENIE LICZB
function createNumbers() {
    for (var i = 1; i <= 49; i++) {
        var div = document.createElement('div');
        div.classList.add('numbers');
        div.textContent = i;
        numberContainer.appendChild(div);
    }
};

// KLIKNIECIE NA LICZBE
function clickNumber(e) {
    if (e.target.getAttribute('class') === 'numbers' && selectedNumbers.length < 6) {
        selectedNumbers.push(Number(e.toElement.innerHTML));
        e.target.setAttribute('class', 'selected');
    }
};

// LOSOWA LICZBA
function randomNumber() {
    var numbers = [];
    for (i = 1; i <= 49; i++) {
        numbers.push(i);
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    random = shuffle(numbers);
}

// LOSOWANIE LICZB
function drawingNumbers() {
    if (counter === 1 && arrayLength6) {
        var para = document.createElement('p');
        para.classList.add('draw-numbers');
        para.textContent = 'Wylosowane liczby to: ';
        scores.appendChild(para);
        randomNumber();
    } else if (counter <= 7) {
        var div = document.createElement('div');
        div.classList.add('numbers');
        div.textContent = random[counter];
        arrayScores.push(Number(div.textContent));
        scores.appendChild(div);

    } else if (arrayScores.length === 6) {
        clearInterval(intId);
    }
    counter++;

};

// SPRAWDZENIE WYNIKU
document.getElementById('check').addEventListener('click', function () {
    if (selectedNumbers.length === 6 && arrayScores.length === 6) {
        var modalContainer = document.getElementById('modalContainer');
        modalContainer.style.display = 'block';

        for (i = 0; i < selectedNumbers.length; i++) {
            for (j = 0; j < arrayScores.length; j++) {
                if (arrayScores[j] === selectedNumbers[i]) {
                    console.log(arrayScores[j]);
                    arrayFinalScore.push(arrayScores[j]);
                }
            }
        }
        if (arrayFinalScore.length === 0 && bool == true) {
            finalScore.textContent = 'Nie trafiłeś żadnej liczby';
            bool = false;
        } else if (arrayFinalScore.length === 1 && bool == true) {
            finalScore.textContent = 'Trafiłeś 1 liczbę';
            bool = false;
        } else if (arrayFinalScore.length === 2 && bool == true) {
            finalScore.textContent = 'Trafiłeś 2 liczby';
            bool = false;
        } else if (arrayFinalScore.length === 3 && bool == true) {
            finalScore.textContent = 'Trafiłeś 3 liczby';
            bool = false;
        } else if (arrayFinalScore.length === 4 && bool == true) {
            finalScore.textContent = 'Trafiłeś 4 liczby';
            bool = false;
        } else if (arrayFinalScore.length === 5 && bool == true) {
            finalScore.textContent = 'Trafiłeś 5 liczb';
            bool = false;
        } else if (arrayFinalScore.length === 6 && bool == true) {
            finalScore.textContent = 'Trafiłeś 6 liczb';
            bool = false;
        }

        if (arrayFinalScore.length > 0 && bool2 == true) {
            checkScores();
            bool2 = false;
        }
    } else {
        alert('Wybierz 6 liczb a następnie kliknij przycisk ROZPOCZNIJ LOSOWANIE!');
    }
});

document.getElementById('remove').addEventListener('click', function () {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
    var modalContainer = document.getElementById('modalContainer');
    if (e.target == modalContainer) {
        modalContainer.style.display = 'none';
    }
});

function checkScores() {
    var lastNumbers = document.querySelector('#lastNumbers');
    for (var i = 0; i < arrayFinalScore.length; i++) {
        var div = document.createElement('div');
        div.classList.add('numbers');
        div.textContent = arrayFinalScore[i];
        lastNumbers.appendChild(div);
    }
};

function playAgain() {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
    selectedNumbers = [];
    counter = 1;
    arrayScores = [];
    arrayFinalScore = [];
    bool = true;
    bool2 = true;
    random;
    arrayLength6 = false;
    var lastNumbers = document.querySelector('#lastNumbers');
    while (lastNumbers.firstChild) {
        lastNumbers.removeChild(lastNumbers.firstChild);
    }

    while (scores.firstChild) {
        scores.removeChild(scores.firstChild);
    }

    var selected = document.querySelectorAll('.selected');
    for (var i = 0; i <= selected.length; i++) {
        selected[i].setAttribute('class', 'numbers');
    };

}

function playAgainSameNumbers() {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
    counter = 1;
    arrayScores = [];
    arrayFinalScore = [];
    bool = true;
    bool2 = true;
    random;
    arrayLength6 = false;
    var lastNumbers = document.querySelector('#lastNumbers');
    while (lastNumbers.firstChild) {
        lastNumbers.removeChild(lastNumbers.firstChild);
    }

    while (scores.firstChild) {
        scores.removeChild(scores.firstChild);
    }
}
