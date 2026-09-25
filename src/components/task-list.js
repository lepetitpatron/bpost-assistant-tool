const DAILY_CHECK_LIST = document.getElementById("daily-checklist");

export function renderTasks(tasks) {
    tasks.forEach(task => {
        let newTask = createTask(task);
        renderTask(newTask);
    });
}

function createTask(task) {
    const DIV = document.createElement("div");
    DIV.className = "form-check";

    const INPUT = document.createElement("input");
    INPUT.className = "form-check-input";
    INPUT.type = "checkbox";
    INPUT.id = `task-${task.id}`;

    const LABEL = document.createElement("label");
    LABEL.className = task.label;
    LABEL.htmlFor = INPUT.id;
    LABEL.textContent = task.label;

    DIV.append(INPUT, LABEL);
     return DIV;
}

function renderTask(task) {
    DAILY_CHECK_LIST.appendChild(task);
}