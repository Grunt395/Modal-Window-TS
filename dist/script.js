var _a;
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
(_a = document.querySelector(".close-modal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    modalElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
});
overlayElement.addEventListener("click", function () {
    modalElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
});
export {};
