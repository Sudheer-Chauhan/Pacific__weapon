window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    // document.getElementById("logo-nav").style.height = "170px";
    document.getElementById("logo-nav").style.background = "rgb(63 63 63)";
    document.getElementById("logo").style.width = "200px";
    document.getElementById("logo").style.padding = "0px";

  } else {
    // document.getElementById("logo-nav").style.height = "180px";
    document.getElementById("logo-nav").style.background = "none";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.padding = "10px";
  }
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
} 

if (bar) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}





