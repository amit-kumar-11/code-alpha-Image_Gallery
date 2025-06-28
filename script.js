const galleryImages = document.querySelectorAll(".card img");
const imageSources = Array.from(galleryImages).map((img) => img.src);
let currentIndex = 0;

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "1000";
overlay.style.flexDirection = "column";
overlay.style.display = "none";

const bigImage = document.createElement("img");
bigImage.style.maxWidth = "90%";
bigImage.style.maxHeight = "80%";
bigImage.style.border = "5px solid white";
bigImage.style.borderRadius = "10px";
bigImage.style.boxShadow = "0 0 30px #fff";

const controls = document.createElement("div");
controls.style.marginTop = "20px";
controls.style.display = "flex";
controls.style.gap = "20px";

const prevBtn = document.createElement("button");
prevBtn.textContent = "⬅️ Prev";
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next ➡️";
const closeBtn = document.createElement("button");
closeBtn.textContent = "❌ Close";

[prevBtn, nextBtn, closeBtn].forEach((btn) => {
  btn.style.padding = "10px 20px";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.backgroundColor = "#fff";
});

controls.appendChild(prevBtn);
controls.appendChild(nextBtn);
controls.appendChild(closeBtn);

overlay.appendChild(bigImage);
overlay.appendChild(controls);
document.body.appendChild(overlay);

function showImage(index) {
  currentIndex = index;
  bigImage.src = imageSources[currentIndex];
  overlay.style.display = "flex";
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageSources.length;
  showImage(currentIndex);
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
