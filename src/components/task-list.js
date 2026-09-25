const dailyChecklist = document.getElementById("daily-checklist");

export function renderTasks(tasks) {
    tasks.forEach(task => {
        let newTask = createTask(task);
        renderTask(newTask);
    });
}

function createTask(task) {
    const div = document.createElement("div");
    div.className = "form-check";

    const input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "checkbox";
    input.id = `task-${task.id}`;

    const label = document.createElement("label");
    label.className = task.label;
    label.htmlFor = input.id;
    label.textContent = task.label;

     div.append(input, label);
     return div;
}

function renderTask(task) {
    dailyChecklist.appendChild(task);
}