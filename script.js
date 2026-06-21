"use strict";


const allQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big. Work hard. Stay focused.",
    "Don't watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you."
];

let quoteIndex = 0;
let autoSlide;

function showQuote() {
    document.getElementById("quoteText").textContent = `"${allQuotes[quoteIndex]}"`;
}

function goToNext() {
    quoteIndex++;
    if (quoteIndex >= allQuotes.length) {
        quoteIndex = 0;
    }
    showQuote();
}

function goToPrev() {
    quoteIndex--;
    if (quoteIndex < 0) {
        quoteIndex = allQuotes.length - 1;
    }
    showQuote();
}

showQuote();
autoSlide = setInterval(goToNext, 4000);

document.getElementById("nextBtn").addEventListener("click", function() {
    clearInterval(autoSlide);
    goToNext();
    autoSlide = setInterval(goToNext, 4000);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    clearInterval(autoSlide);
    goToPrev();
    autoSlide = setInterval(goToNext, 4000);
});


let newYear = new Date("January 1, 2027 00:00:00");
let clock;
let clockOn = false;

function startClock() {

    let now = new Date();
    let gap = newYear - now;

    if (gap <= 0) {
        clearInterval(clock);
        clockOn = false;
        document.getElementById("timeup").textContent = "Time's up! The event has started 🎉";
        return;
    }

    let days    = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((gap / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((gap / (1000 * 60)) % 60);
    let seconds = Math.floor((gap / 1000) % 60);

    document.getElementById("days").textContent    = days    < 10 ? "0" + days    : days;
    document.getElementById("hours").textContent   = hours   < 10 ? "0" + hours   : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

}

startClock();
clock = setInterval(startClock, 1000);
clockOn = true;

document.getElementById("startBtn").addEventListener("click", function() {
    if (!clockOn) {
        clock = setInterval(startClock, 1000);
        clockOn = true;
    }
});

document.getElementById("pauseBtn").addEventListener("click", function() {
    clearInterval(clock);
    clockOn = false;
});


setTimeout(function() {
    document.getElementById("modal").classList.add("show");
}, 5000);

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("show");
});
