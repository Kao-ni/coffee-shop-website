document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const galleryImages = document.querySelectorAll(".gallery-image");

  galleryImages.forEach(image => {
    image.addEventListener("click", () => {
      popupImg.src = image.src;
      popup.classList.add("popup-visible");
      document.body.classList.add("no-scroll");
    });
  });

  popup.addEventListener("click", () => {
    popup.classList.remove("popup-visible");
    popupImg.src = "";
    document.body.classList.remove("no-scroll");
  });

  popupImg.addEventListener("click", e => {
    e.stopPropagation();
  });
});
