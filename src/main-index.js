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

// New elements for video and notes
let videoFrame = document.getElementById('videoFrame');
let notesSection = document.getElementById('notesSection');

if (!videoFrame) {
    videoFrame = document.createElement('div');
    videoFrame.id = 'videoFrame';
    videoFrame.className = 'video-frame';
    courseDesc.insertAdjacentElement('afterend', videoFrame);
}
if (!notesSection) {
    notesSection = document.createElement('section');
    notesSection.id = 'notesSection';
    notesSection.className = 'notes-section';
    videoFrame.insertAdjacentElement('afterend', notesSection);
}

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
            li.textContent = item.title;
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
    courseTitle.textContent = course.title;
    // Render video preview using firstVideoId
    if (course.firstVideoId) {
        videoFrame.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${course.firstVideoId}" frameborder="0" allowfullscreen></iframe>`;
        videoFrame.style.display = '';
    } else {
        videoFrame.innerHTML = '';
        videoFrame.style.display = 'none';
    }
    // Render notes
    renderNotes(course.notes);
    goBtn.classList.remove('hidden');
    goBtn.onclick = () => {
        if (course.folder) {
            window.location.href = `${course.folder}/index.html`;
        }
    };
}

function renderNotes(notes) {
    notesSection.innerHTML = ''; // Limpia el contenedor
    if (!notes || notes.length === 0) {
        notesSection.innerHTML += '<p><em>Este curso no tiene descripcion</em></p>';
        return;
    }
    notes.forEach(note => renderNote(note, notesSection));
}

function renderNote(note, container) {
    switch (note.type) {
        case 'subtitle':
            container.insertAdjacentHTML('beforeend', `<div class="note-subtitle">${note.content}</div>`);
            break;
        case 'text':
            container.insertAdjacentHTML('beforeend', `<p>${note.content}</p>`);
            break;
        case 'link':
            container.insertAdjacentHTML('beforeend', `<p><a href="${note.content}" target="_blank">${note.content}</a></p>`);
            break;
        case 'named_link':
            container.insertAdjacentHTML('beforeend', `<p><a href="${note.url}" target="_blank" class="note-named-link">${note.text}</a></p>`);
            break;
        case 'image':
            container.insertAdjacentHTML('beforeend', `<img src="${note.content}" alt="Imagen" style="max-width:100%;margin:1em 0;">`);
            break;
        case 'code':
            container.insertAdjacentHTML('beforeend', renderCodeBlock(note.content));
            break;
    }
}

function renderCodeBlock(code) {
    return `
        <div class="code-block-container">
            <pre><code>${code}</code></pre>
        </div>
    `;
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

goBtn.onclick = () => {};