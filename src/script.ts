const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");

if (!modalElement || !overlayElement) {
    throw "Error - null value";
}

document.querySelector(".show-modal")?.addEventListener("click", function () {
    modalElement.classList.remove("hidden");
});

document.querySelector(".close-modal")?.addEventListener("click", function () {
    console.log("pog");
    modalElement.classList.add("hidden");
});