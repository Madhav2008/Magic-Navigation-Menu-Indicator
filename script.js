const list = document.querySelectorAll('.list');
function activeLine() {
    list.forEach((item) =>
        item.classList.remove('active')
    );
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink)
);