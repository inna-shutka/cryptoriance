"use strict";

const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");

const imgOne = document.querySelector("#item-1");
const imgTwo = document.querySelector("#item-2");
const imgThree = document.querySelector("#item-3");


btnOne.addEventListener("click", showImageOne);

function showImageOne() {
    imgOne.style.display = "block";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
};

btnTwo.addEventListener("click", showImageTwo);

function showImageTwo() {
    imgOne.style.display = "none";
    imgTwo.style.display = "block";
    imgThree.style.display = "none";
}

btnThree.addEventListener("click", showImageThree);

function showImageThree() {
    imgOne.style.display = "none";
    imgTwo.style.display = "none";
    imgThree.style.display = "block";
}