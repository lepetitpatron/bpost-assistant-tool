const btn = document.getElementById('btnReset');

function addCheckbox(id, label) {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-check';

    const input = document.createElement('input');
    input.className = 'form-check-input';
    input.type = 'checkbox';
    input.id = id;

    const labelEl = document.createElement('label');
    labelEl.className = 'form-check-label';
    labelEl.setAttribute('for', id);
    labelEl.textContent = label;

    wrapper.appendChild(input);
    wrapper.appendChild(labelEl);
    document.getElementById('daily-checklist').appendChild(wrapper);
}

btn.addEventListener('click', () => {
    const confirmReset = window.confirm('Resetten?');

    if (confirmReset) {
        checkboxes.forEach(checkbox => checkbox.checked = false)
    }
});

for (const task of tasks) {
    addCheckbox(task.id, task.label);
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
