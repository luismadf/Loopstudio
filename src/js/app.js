const creationsOption = document.querySelector("#creations-options");
const buttonMenu = document.querySelector(".button-menu");
const overlay = document.querySelector(".overlay-body");
const menu = document.querySelector("#menu");
const logo = document.querySelector(".logo");
const close = document.querySelector(".button-close");

const db = [
  {
    img: "image-deep-earth.jpg",
    title: "Deep earth",
  },
  {
    img: "image-night-arcade.jpg",
    title: "Night arcade",
  },
  {
    img: "image-soccer-team.jpg",
    title: "Soccer team VR",
  },
  {
    img: "image-grid.jpg",
    title: "The grid",
  },
  {
    img: "image-from-above.jpg",
    title: "From up above VR",
  },
  {
    img: "image-pocket-borealis.jpg",
    title: "Pocket borealis",
  },
  {
    img: "image-curiosity.jpg",
    title: "The curiosity",
  },
  {
    img: "image-fisheye.jpg",
    title: "Make it fisheye",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  db.forEach((option) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerHTML = `
    <img src="./src/img/desktop/${option.img}" alt="post" />
    <div class="overlay-option">
      <h3>${option.title}</h3>
    </ div>
    `;
    creationsOption.appendChild(div);
  });
});

buttonMenu.addEventListener("click", () => {
  overlay.classList.add("active");
  menu.classList.add("active");
  logo.classList.add("active-over");
  close.classList.add("active", "active-over");
});

close.addEventListener("click", () => {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  logo.classList.remove("active-over");
  close.classList.remove("active", "active-over");
});
