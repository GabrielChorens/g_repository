import { courses } from './courses-list.js';

const passwordModal = document.getElementById('passwordModal');
const mainContainer = document.getElementById('mainContainer');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const passwordForm = document.getElementById('passwordForm');
const PASSWORD = 'Paradius'; // You can change this if needed

function showMainContent() {
    passwordModal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
    passwordInput.value = '';
    passwordError.textContent = '';
}

function checkPassword(e) {
    if (e) e.preventDefault();
    if (passwordInput.value === PASSWORD) {
        showMainContent();
    } else {
        passwordError.textContent = 'Contraseña incorrecta';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

passwordForm.addEventListener('submit', checkPassword);
passwordInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') checkPassword(e);
});

// Render courses only after password is validated
const coursesGrid = document.getElementById('coursesGrid');

function renderCourses() {
    coursesGrid.innerHTML = '';
    courses.forEach((course, idx) => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Ir al curso ${course.name}`);

        const title = document.createElement('div');
        title.className = 'course-title';
        title.textContent = course.name;

        const desc = document.createElement('div');
        desc.className = 'course-desc';
        desc.textContent = course.description;

        const goBtn = document.createElement('button');
        goBtn.className = 'go-btn';
        goBtn.textContent = 'Ir al curso';
        goBtn.onclick = () => goToCourse(idx);

        card.onclick = () => goToCourse(idx);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') goToCourse(idx);
        };

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(goBtn);
        coursesGrid.appendChild(card);
    });
}

function goToCourse(idx) {
    const folder = courses[idx].folder;
    window.location.href = `${folder}/src/index.html`;
}

// Only render courses if mainContainer is visible (after password)
if (!mainContainer.classList.contains('hidden')) {
    renderCourses();
}
// Also render after successful login
mainContainer.addEventListener('transitionstart', renderCourses);