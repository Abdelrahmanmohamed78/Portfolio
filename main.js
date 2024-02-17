// Create Scrollbar Progress

let scrollbarProgress = document.querySelector(".scrollbarProgress");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollbarProgress.style.width = `${(scrollTop / height) * 100}%`;
});

//Display and remove icon & aside

let icon = document.querySelector(".icon");
let aside = document.querySelector("aside");
let btn = document.querySelector(".topArrow");

icon.onclick = function () {
  if (aside.getAttribute("class") === "clicked") {
    aside.removeAttribute("class");
  } else {
    aside.setAttribute("class", "clicked");
  }
};

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

//Active Link When Clicked
let active = document.querySelectorAll("aside .links li");
let activeLink = document.querySelector("aside .links li a");

active.forEach((li) => {
  li.addEventListener("click", (e) => {
    active.forEach((li) => {
      li.children[0].classList.remove("active");
    });
    e.currentTarget.children[0].classList.add("active");
  });
});

//Random Background
let imgs = [
  "./images/landing.jpg",
  "./images/landing2.jpg",
  "./images/landing3.jpg",
];
let landing = document.querySelector(".page .content .landing");

setInterval(() => {
  let inx = Math.floor(Math.random() * imgs.length);
  landing.style.backgroundImage = `url("${imgs[inx]}")`;
}, 5000);

//animate Skills Sec
let skills = document.querySelector(".skills");
let skill = document.querySelectorAll(".skills .boxes .box .progress span");
let scrollBtn = document.querySelector(".scrollBtn");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 200) {
    skill.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }

  //Scroll To Top Button

  if (window.scrollY >= 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

// If Clicked On Scroll Button
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Handle Filter

let filterElement = document.querySelectorAll(".portfolio .filter ul li");
let filterBoxes = document.querySelectorAll('.portfolio .boxes .box');

filterElement.forEach((li) => {
  li.addEventListener("click", (e) => {
    filterElement.forEach(li => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    filterBoxes.forEach(box => {
      box.style.display = "none";
      filterBoxes.forEach(box => {
        if(box.classList.contains(e.currentTarget.dataset.element)) {
          box.style.display = "block";
        }
      })
    });
  });
});
