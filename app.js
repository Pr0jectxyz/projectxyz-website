const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo');
// diplay mobile menu
const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobilemenu);

// show active menu when scrolling
const hightlightmenu = () => {
    const elem = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home-page');
    const aboutmenu = document.querySelector('#about-page');
    const servicesmenu = document.querySelector('#services-page');
    let scrollpos = window.scrollY;
    console.log(scrollpos);

    // add 'highlights' to my menu items
    if (window.innerWidth > 960 && scrollpos < 600) {
        homemenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutmenu.classList.add('highlight');
        homemenu.classList.remove('highlight');
        servicesmenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollpos < 2345) {
        servicesmenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight')
    }
};


window.addEventListener('scroll', hightlightmenu);
window.addEventListener('click', hightlightmenu);

// close mobile menu when clicking on it
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
};

menulinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);

// // pause profile timer

var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
// var interval; // to store timer values

// // this function will run when click on start

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// buttonStart.onclick = function () {
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(startTimer);
// };

// buttonStop.onclick = function () {
//   clearInterval(interval);
// };

// buttonReset.onclick = function () {
//   clearInterval(interval);
//   tens = "00";
//   seconds = "00";
//   appendSeconds.innerHTML = seconds;
//   appendTens.innerHTML = tens;
// };





// accordion faq script

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


