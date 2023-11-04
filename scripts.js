const tabs = document.querySelectorAll('.tab');
const contentPages = document.querySelectorAll('.content-page');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Hide all content pages
        contentPages.forEach(page => page.style.display = 'none');
        // Show the corresponding content page
        contentPages[index].style.display = 'block';
    });
});
