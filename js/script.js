const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');
const saveBtn = document.getElementById('save-btn');
const toggleDarkModeImg = document.getElementById('toggle-dark-mode');
let todos = [];

// Dodavanje stavke u listu
addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);

        const newItem = document.createElement('li');
        newItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const textSpan = document.createElement('span');
        textSpan.classList.add('todo-text');
        textSpan.textContent = todoText;

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                textSpan.classList.add('completed');
            } else {
                textSpan.classList.remove('completed');
            }
        });

        newItem.appendChild(checkbox);
        newItem.appendChild(textSpan);
        todoList.appendChild(newItem);

        todoInput.value = '';
    }
});

// Funkcija za prebacivanje tamnog/svetlog moda
toggleDarkModeImg.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Menjanje ikonice u zavisnosti od moda
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeImg.src = "pics/SunLogo.png"; // Ikonica za Light Mode
        toggleDarkModeImg.alt = "Light Mode";
    } else {
        toggleDarkModeImg.src = "pics/MoonLogo.png"; // Ikonica za Dark Mode
        toggleDarkModeImg.alt = "Dark Mode";
    }
});

// Save button event (Node.js functionality not applicable in browser)
saveBtn.addEventListener('click', () => {
    if (todos.length > 0) {
        alert('Lista je sačuvana! (Ovo je primer, potreban je backend da bi se sačuvalo u fajl)');
    } else {
        alert('Nema stavki za čuvanje.');
    }
});
