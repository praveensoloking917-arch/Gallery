const images = [
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/273/400/300",
    "https://picsum.photos/id/1011/400/300",
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1050/400/300",
    "https://picsum.photos/id/1047/400/300",
    "https://picsum.photos/id/1048/400/300",
    "https://picsum.photos/id/1019/400/300",
    "https://picsum.photos/id/1040/400/300" 
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
        images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex];
}

function filterImages(category) {

    let items = document.querySelectorAll(".image-box");

    items.forEach(item => {

        if (category === "all" ||
            item.classList.contains(category)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";
        }
    });
}