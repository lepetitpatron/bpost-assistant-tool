import { renderTasks } from "./components/task-list.js";

const TASKS = [
    {
        "id": 1,
        "label": "Mails behandelen",
    },
    {
        "id": 2,
        "label": "Daily Quality Check invullen",
    },
    {
        "id": 3,
        "label": "Klara klachten behandelen",
    },
    {
        "id": 4,
        "label": "Sumo klachten behandelen",
    },
    {
        "id": 5,
        "label": "Werkpost controle (10h30)",
    },
    {
        "id": 6,
        "label": "Werkpost controle (14h30)",
    },
    {
        "id": 7,
        "label": "Planning D+1 voorbereiden",
    },
    {
        "id": 8,
        "label": "Kwaliteit invullen",
    },
    {
        "id": 9,
        "label": "ZZA werkpost controleren",
    },
    {
        "id": 10,
        "label": "ZZA uitreiken in Distripost",
    },
    {
        "id": 11,
        "label": "Bijdragen",
    }
]

renderTasks(TASKS);