window.addEventListener('scroll', function () {
    let navbar = document.getElementById('nav');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});
