var _a, _b;
const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
if (!modalElement || !overlayElement) {
    throw "Error - null value";
}
(_a = document.querySelector(".show-modal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    modalElement.classList.remove("hidden");
});
(_b = document.querySelector(".close-modal")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    console.log("pog");
    modalElement.classList.add("hidden");
});
export {};
