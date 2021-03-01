const creationsOption = document.querySelector("#creations-options");

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
    <img src="./src/img/desktop/${option.img}" alt="" />
    <div class="overlay-option">
      <h3>${option.title}</h3>
    </ div>
    `;
    creationsOption.appendChild(div);
  });
});
