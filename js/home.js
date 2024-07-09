// intro-animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".my-element");
  const observerOptions = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("animate");
        void entry.target.offsetWidth;
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);
  elements.forEach((element) => {
    observer.observe(element);
  });
});
// end-intro-animation
// introduction-animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add("animate-third");
        } else {
          const element = entry.target;
          element.classList.remove("animate-third");
          element.style.animation = "none";
          element.offsetHeight;
          element.style.animation = "";
        }
      });
    },
    { threshold: 0.1 }
  );
  const target = document.querySelector(".third-element");
  if (target) {
    observer.observe(target);
  }
});
// end-introduction-animation
// goals-animation
document.addEventListener("DOMContentLoaded", function () {
  const goalsListItems = document.querySelectorAll(".goals ul li");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          goalsListItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.2}s`;
            item.classList.add("in-view");
          });
        } else {
          goalsListItems.forEach((item) => {
            item.classList.remove("in-view");
            item.style.transitionDelay = "";
          });
        }
      });
    },
    { threshold: 0.1 }
  );
  goalsListItems.forEach((item) => {
    observer.observe(item);
  });
});
// end-goals-animation
// categories-animation
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function onScroll() {
    categories.forEach((el, index) => {
      if (isElementInViewport(el) && !el.classList.contains("fade-in")) {
        setTimeout(() => {
          el.classList.add("fade-in");
        }, index * 300);
      }
    });
    if (
      Array.from(categories).every((el) => el.classList.contains("fade-in"))
    ) {
      window.removeEventListener("scroll", onScroll);
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
});
// end-categories-animation
