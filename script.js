const button = document.getElementById("teiobtn");
const image = document.getElementById("anime");
const hachimi = document.getElementById("hachimi")

button.addEventListener("click", () => {
    image.classList.remove("animate"); // reset if clicked again quickly

    void image.offsetWidth; // force reflow so animation restarts

    image.classList.add("animate");

    hachimi.play();
});