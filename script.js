const heartCount = 300;

for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("img");
    heart.src = "assets/tiny-heart.png";
    heart.classList.add("falling-heart");

    // случайный размер
    const size = 10 + Math.random() * 15;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // случайное стартовое положение (top и left)
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    heart.style.left = startX + "px";
    heart.style.top = startY + "px";

    // случайная конечная позиция по диагонали (сдвиг по X и Y)
    const endX = startX + 50 + Math.random() * (window.innerWidth / 2);
    const endY = startY + 100 + Math.random() * (window.innerHeight / 2);

    // скорость падения
    const duration = 3 + Math.random() * 3;
    heart.style.animationDuration = duration + "s";
    heart.style.animationTimingFunction = "linear";

    // добавляем элемент в body
    document.body.appendChild(heart);

    // задаём анимацию через CSS переменные
    heart.style.setProperty("--startX", startX + "px");
    heart.style.setProperty("--startY", startY + "px");
    heart.style.setProperty("--endX", endX + "px");
    heart.style.setProperty("--endY", endY + "px");

    // перезапуск анимации после конца
    heart.addEventListener("animationend", () => {
        const newStartX = Math.random() * window.innerWidth;
        const newStartY = Math.random() * window.innerHeight;
        const newEndX = newStartX + 50 + Math.random() * (window.innerWidth / 2);
        const newEndY = newStartY + 100 + Math.random() * (window.innerHeight / 2);

        heart.style.left = newStartX + "px";
        heart.style.top = newStartY + "px";
        heart.style.width = 10 + Math.random() * 15 + "px";
        heart.style.height = 10 + Math.random() * 15 + "px";
        heart.style.animationDuration = 3 + Math.random() * 3 + "s";

        heart.style.setProperty("--startX", newStartX + "px");
        heart.style.setProperty("--startY", newStartY + "px");
        heart.style.setProperty("--endX", newEndX + "px");
        heart.style.setProperty("--endY", newEndY + "px");

        heart.classList.remove("falling-heart");
        void heart.offsetWidth; // trigger reflow
        heart.classList.add("falling-heart");
    });
}