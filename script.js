document.addEventListener("DOMContentLoaded", () => {
    let paragraph = document.getElementById('intro');
    let changeColor = () => paragraph.style.color = 'black';
    let originalColor = () => paragraph.style.color = '';
    paragraph.addEventListener('mouseover', changeColor);
    paragraph.addEventListener('mouseout',originalColor);
  });