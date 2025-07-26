document.addEventListener("DOMContentLoaded", () => {
  /*** Lightbox setup ***/
  const choiceImages = Array.from(document.querySelectorAll(".choice img"));
  const targetImage = document.querySelector(".target-image");

  if ((choiceImages.length > 0 || targetImage)) {
    const images = [targetImage, ...choiceImages].filter(Boolean); // remove nulls
    let currentIndex = 0;

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="close" aria-label="Close gallery">&times;</button>
        <img src="" alt="" id="lightbox-image">
        <div class="lightbox-controls">
          <button id="prev" aria-label="Previous image">&#10094;</button>
          <button id="next" aria-label="Next image">&#10095;</button>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = lightbox.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function openLightbox(index) {
      currentIndex = index;
      lightboxImage.src = images[currentIndex].src;
      lightbox.style.display = "flex";
      lightbox.addEventListener("keydown", trapFocus);
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.style.display = "none";
      lightbox.removeEventListener("keydown", trapFocus);
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImage.src = images[currentIndex].src;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImage.src = images[currentIndex].src;
    }

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    images.forEach((img, index) => {
      img.addEventListener("dblclick", () => openLightbox(index));
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    function trapFocus(event) {
      const focusable = lightbox.querySelectorAll("button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      } else if (event.key === "Escape") {
        closeLightbox();
      }
    }
  }

  /*** Font size controls ***/
  // Select elements
  const increaseBtn = document.getElementById('increase-font');
  const decreaseBtn = document.getElementById('decrease-font');
  const root = document.documentElement;

  // Default font size
  let fontSize = parseFloat(localStorage.getItem('fontSize')) || 1.2;
  applyFontSize(fontSize);

  // Button event listeners
  increaseBtn?.addEventListener('click', () => {
    fontSize = Math.min(fontSize + 0.1, 2); // cap to avoid ridiculous scaling
    updateFontSize(fontSize);
  });

  decreaseBtn?.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 0.1, 0.8); // lower limit
    updateFontSize(fontSize);
  });

  // Apply size to HTML root
  function updateFontSize(size) {
    localStorage.setItem('fontSize', size.toFixed(2));
    applyFontSize(size);
  }

  function applyFontSize(size) {
    document.body.style.fontSize = `${size}rem`;
  }

});
