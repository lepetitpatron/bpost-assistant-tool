import { renderTasks } from "./components/task-list.js";

let tasks = [
    {
        "id": 1,
        "label": "task 1"
    },
    {
        "id": 2,
        "label": "task 2"
    },
    {
        "id": 3,
        "label": "task 3"
    }
];

renderTasks(tasks);