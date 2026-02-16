const shareToast = document.getElementById("share-toast");
const shareBtn = document.getElementById("share-btn");

let toastVisible = false;

shareBtn.addEventListener("click", () => {
    toastVisible ? shareToast.style.display = "none" : shareToast.style.display = "flex";
    toastVisible = !toastVisible;
});