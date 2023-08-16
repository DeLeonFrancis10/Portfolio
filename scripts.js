document.addEventListener('DOMContentLoaded', function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible');
    const screenshots = document.querySelectorAll('.screenshot');
    const body = document.querySelector('body');

    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            const expandedImage = document.createElement('div');
            expandedImage.className = 'expanded-image';
            expandedImage.innerHTML = `<img src="${this.src}" alt="Expanded Screenshot">`;
            body.appendChild(expandedImage);

            expandedImage.addEventListener('click', function() {
                body.removeChild(expandedImage);
            });
        });
    });
});
