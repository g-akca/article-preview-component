const shareToast = document.getElementById("share-toast");
const shareBtn = document.getElementById("share-btn");
const author = document.getElementById("card-author");

shareBtn.addEventListener("click", () => {
    if (shareToast.style.display == "flex") {
        shareToast.style.display = "none";
        if (window.innerWidth <= 375) author.style.visibility = "visible";
    }
    else {
        shareToast.style.display = "flex";
        if (window.innerWidth <= 375) author.style.visibility = "hidden";
    }
});