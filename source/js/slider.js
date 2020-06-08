"use strict"

var petsButtonRight = document.querySelector(".pets__button-right");
var petsButtonLeft = document.querySelector(".pets__button-left");
var petsImgWrapper = document.querySelector(".pets__img-wrapper--1 img");
var petsPicWrapper = document.querySelector(".pets__img-wrapper--1 source");
var petsPicWrapper2 = document.querySelector(".pets__img-wrapper--2 source");
var petsPicWrapper3 = document.querySelector(".pets__img-wrapper--3 source");
var counter = 1;


function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if(getWindowWidth() < 768)  {
  petsButtonRight.addEventListener("click", function () {
    counter ++;

    if(counter > 3) {
      counter = 1;
    }
    petsImgWrapper.src = "img/cat" + counter + ".jpg";
  });

  petsButtonLeft.addEventListener("click", function () {
    counter --;

    if(counter < 1) {
      counter = 3;
    }
    petsImgWrapper.src = "img/cat" + counter + ".jpg";
  });
} else {
  petsButtonRight.addEventListener("click", function () {
    counter ++;

    if(counter > 3) {
      counter = 1;
    }
    petsPicWrapper.srcset = "img/cat" + counter + "@tablet.jpg";
  })
}

