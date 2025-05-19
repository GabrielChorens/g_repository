import { courses } from './courses-list.js';

const passwordModal = document.getElementById('passwordModal');
const mainContainer = document.getElementById('mainContainer');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const passwordForm = document.getElementById('passwordForm');
const PASSWORD = 'Paradius'; // You can change this if needed

const courseList = document.getElementById('courseList');
const courseTitle = document.getElementById('courseTitle');
const courseDesc = document.getElementById('courseDesc');
const goBtn = document.getElementById('goBtn');
const sidebar = document.getElementById('sidebar');

let selectedCourseIdx = null;

function renderCourseList() {
    courseList.innerHTML = '';
    let firstCourseIdx = null;
    courses.forEach((item, idx) => {
        if (item.type === 'category') {
            const divider = document.createElement('li');
            divider.textContent = item.name;
            divider.className = 'category-divider';
            divider.setAttribute('aria-disabled', 'true');
            courseList.appendChild(divider);
        } else {
            if (firstCourseIdx === null) firstCourseIdx = idx;
            const li = document.createElement('li');
            li.textContent = item.name;
            li.className = (selectedCourseIdx === idx) ? 'selected' : '';
            li.onclick = () => selectCourse(idx);
            li.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') selectCourse(idx);
            };
            li.tabIndex = 0;
            courseList.appendChild(li);
        }
    });
    // Select the first course by default if none selected
    if (selectedCourseIdx === null && firstCourseIdx !== null) {
        selectCourse(firstCourseIdx);
    }
}

function selectCourse(idx) {
    selectedCourseIdx = idx;
    renderCourseList();
    const course = courses[idx];
    courseTitle.textContent = course.name;
    courseDesc.textContent = course.description;
    goBtn.classList.remove('hidden');
    goBtn.onclick = () => goToCourse(idx);
}

function showMainContent() {
    passwordModal.classList.add('hidden');
    mainContainer.classList.remove('hidden');
    passwordInput.value = '';
    passwordError.textContent = '';
    // Add header above the course list
    if (!document.getElementById('sidebarHeader')) {
        const header = document.createElement('div');
        header.id = 'sidebarHeader';
        header.textContent = 'Cursos';
        header.className = 'sidebar-header';
        sidebar.insertBefore(header, courseList);
    }
    renderCourseList();
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

goBtn.classList.add('hidden');

function goToCourse(idx) {
    const folder = courses[idx].folder;
    window.location.href = `${folder}/index.html`;
}