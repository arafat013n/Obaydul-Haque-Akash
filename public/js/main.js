function menuFunction() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    const open = document.getElementById("open");
    const close = document.getElementById("close");

    open.classList.toggle("active");
    close.classList.toggle("active");
}

