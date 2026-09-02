const btn = document.getElementById('btnReset');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

btn.addEventListener('click', () => {
    const confirmReset = window.confirm('Resetten?');

    if (confirmReset) {
        checkboxes.forEach(checkbox => checkbox.checked = false)
    }
});