document.addEventListener("DOMContentLoaded", function () {
    const nav2 = document.getElementById('nav2');
    const menuToggle = document.getElementById('menuToggle');

    menuToggle.addEventListener('click', function () {
        nav2.classList.toggle('show');
    });
});