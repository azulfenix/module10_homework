const btn = document.querySelector('.j-btn-test');
btn.addEventListener('click', () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    window.alert(`Размер экрана: ${screenWidth}px x ${screenHeight}px`);
}
)