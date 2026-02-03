const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const buttons = Array.from(document.querySelectorAll(".show-modal"));

if (!modalElement || !overlayElement) {
    throw "Error - null value";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        modalElement.classList.remove("hidden");
        overlayElement.classList.remove("hidden");
    });    
}

document.querySelector(".close-modal")?.addEventListener("click", function () {
    modalElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
});

overlayElement.addEventListener("click", function () {
    modalElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
});