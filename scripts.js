const items = document.querySelectorAll(".bar-pages__text");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
    console.log(item);
  });
});

// Функция для проверки, находится ли элемент в области видимости (viewport)
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

// Функция для анимации элементов при скролле
function animateScrollingElements() {
  const elements = document.querySelectorAll(".element-to-animate");

  elements.forEach((element) => {
    if (
      isElementInViewport(element) &&
      !element.classList.contains("animated")
    ) {
      // Если элемент виден и еще не анимирован, добавляем класс 'animated'
      element.classList.add("animated");
    }
  });
}

// Запуск анимации при загрузке страницы
document.addEventListener("DOMContentLoaded", animateScrollingElements);

// Запуск анимации при скролле
window.addEventListener("scroll", animateScrollingElements);
