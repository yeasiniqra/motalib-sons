"use strict";

//mobile menu JS
const toggleMenu = () => {
    const menu = document.querySelector('.off-canvas-menu');
    const overlay = document.querySelector('.overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  window.addEventListener('click', function(event) {
    const menu = document.querySelector('.off-canvas-menu');
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.classList.remove('open');
      overlay.classList.remove('active');
    }
  });

 //mobile menu dropdown JS
 for (var allHasChildren = document.querySelectorAll(".menu-item-has-children a"), x = 0; x < allHasChildren.length; x++)
    allHasChildren[x].onclick = function () {
        var e = this.parentNode.getElementsByClassName("sub-menu")[0];
        e.classList.contains("show") ? e.classList.remove("show") : e.classList.add("show");
    }; 

// menu sticky js
var scrollpos = window.scrollY,
    header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("sticky-menu");
}

function remove_class_on_scroll() {
    header.classList.remove("sticky-menu");
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos > 150) { 
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});

//counter up JS
const c = (s, st, e, d) => {
    const el = document.querySelector(s);
    let t = null;

    const a = (ts) => {
        if (!t) t = ts;
        const p = Math.min((ts - t) / d, 1);
        el.innerText = Math.floor(p * (e - st) + st);
        if (p < 1) window.requestAnimationFrame(a);
    };

    window.requestAnimationFrame(a);
};

const ac = () => {
    c("#count1", 300, 25, 1000);
    c("#count2", 5000, 100, 1500);
    c("#count3", 1000, 150, 2000);
    c("#count4", 500, 20, 2500);
    c("#count5", 500, 2, 2500);
    c("#count6", 500, 96, 2500);
};

let is = false;

const ca = () => {
    if (is) return;
    const se = document.querySelector("#scrollanime");
    if (se.getBoundingClientRect().top + 50 <= (window.innerHeight || document.documentElement.clientHeight)) {
        ac();
        is = true;
    }
};

window.addEventListener("scroll", ca);

// back to top JS
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) { 
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




