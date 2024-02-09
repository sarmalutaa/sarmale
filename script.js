function handleClick() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

window.addEventListener('click', (event) => {
    var popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});