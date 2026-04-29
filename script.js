
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


const aboutText = document.querySelector(".about-school");

aboutText.addEventListener("mousemove", (e) => {
  const rect = aboutText.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  aboutText.style.setProperty("--x", x + "%");
  aboutText.style.setProperty("--y", y + "%");
});

const stats = document.querySelectorAll(".stat");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      const update = () => {
        const target = +el.dataset.target;
        const current = +el.innerText.replace('%','');

        const increment = target / 80;

        if (current < target) {
          el.innerText = Math.ceil(current + increment) + "%";
          setTimeout(update, 20);
        } else {
          el.innerText = target + "%";
        }
      };

      update();
      observer.unobserve(el); // run once only
    }
  });
});

stats.forEach(stat => observer.observe(stat));



