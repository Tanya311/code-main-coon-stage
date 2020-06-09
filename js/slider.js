"use strict"

var petsPhotosWrapper = document.querySelector(".pets__photos-wrapper")

var petsButtonRight = document.querySelector(".pets__button-right");
var petsButtonLeft = document.querySelector(".pets__button-left");
var petsImgWrapper = document.querySelector(".pets__img-wrapper--1 img");

var pets1Wrapper = document.querySelector(".pets__img-wrapper--1");
var pets2Wrapper = document.querySelector(".pets__img-wrapper--2");
var pets3Wrapper = document.querySelector(".pets__img-wrapper--3");

var petsPicWrapper = document.querySelector(".pets__img-wrapper--1 source");
var petsPicWrapper2 = document.querySelector(".pets__img-wrapper--2 source");
var petsPicWrapper3 = document.querySelector(".pets__img-wrapper--3 source");
var counter = 1;
var counter2 = 0;
var counter3 = 2;


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
    counter2 ++;
    counter3 ++;

    if(counter > 3) {
      counter = 1;
    }
    if(counter2 > 3) {
      counter2 = 1;
    }
    if(counter3 > 3) {
      counter3 = 1;
    }
    petsPicWrapper.srcset = "img/cat" + counter + "@tablet.jpg";
    petsPicWrapper2.srcset = "img/cat" + counter3 + "@tablet.jpg";
    petsPicWrapper3.srcset = "img/cat" + counter2 + "@tablet.jpg";
  })

  petsButtonLeft.addEventListener("click", function () {
    counter --;
    counter2 --;
    counter3 --;

    if(counter < 1) {
      counter = 3;
    }
    if(counter2 < 1) {
      counter2 = 3;
    }
    if(counter3 < 1) {
      counter3 = 3;
    }
    petsPicWrapper.srcset = "img/cat" + counter + "@tablet.jpg";
    petsPicWrapper2.srcset = "img/cat" + counter3 + "@tablet.jpg";
    petsPicWrapper3.srcset = "img/cat" + counter2 + "@tablet.jpg";
  })
}




