let pos = 0;
const totalSlides = 7;
const slider = document.getElementById("mainSlider");
const dots = document.querySelectorAll(".dot");
const navItems = document.querySelectorAll(".nav-item");

/* ✅ CHANGED HERE — allows px OR vw width */
function toggleNav(w) {
  if (typeof w === "number") {
    document.getElementById("sideNav").style.width = w + "px";
  } else {
    document.getElementById("sideNav").style.width = w;
  }
}

function update() {
  slider.style.transform = `translateY(-${pos * 100}vh)`;

  dots.forEach((d, i) => {
    d.classList.toggle("active", i === pos);
  });

  navItems.forEach((n, i) => {
    n.classList.toggle("active", i === pos);
  });
}

function nextSlide() {
  if (pos < totalSlides - 1) {
    pos++;
    update();
  }
}

function prevSlide() {
  if (pos > 0) {
    pos--;
    update();
  }
}

function jump(i) {
  pos = i;
  update();
}

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) nextSlide();
  else prevSlide();
});

/* ✅ FIXED + ADDED HERE — passed event properly */
function showTab(name, el) {
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.remove("active");
  });

  el.classList.add("active");

  document.querySelectorAll(".tab-panel").forEach((p) => {
    p.classList.remove("active");
  });

  document.getElementById(name).classList.add("active");
}
// chatbot

<iframe
  src="https://www.chatbase.co/chatbot-iframe/KssADbkPVxOjn_orvt3pV"
  width="100%"
  style="height: 100%; min-height: 700px"
  frameborder="0"
></iframe>;
