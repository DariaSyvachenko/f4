// Функція для зміни кольору фону та тексту за допомогою getElementById
function changeColorById() {
    var element = document.getElementById("element1");
    toggleColor(element, 'highlight1', 'highlight2');
}

// Функція для зміни кольору фону та тексту за допомогою querySelector
function changeColorByQuerySelector() {
    var element = document.querySelector("#element2");
    toggleColor(element, 'highlight1', 'highlight2');
}

// Функція для зміни кольору фону та тексту
function toggleColor(element, classToAdd, classToRemove) {
    // Перевірка, чи вже відзначено
    var isHighlighted = element.classList.contains(classToAdd);

    if (isHighlighted) {
        // Якщо вже відзначено, змінити на інший колір
        element.classList.remove(classToAdd);
        element.classList.add(classToRemove);
    } else {
        // Якщо не відзначено, відзначити
        element.classList.add(classToAdd);
        element.classList.remove(classToRemove);
    }
}